const Observer = (obj, update) => {
  let $$lastState = obj
  let $$lastSubscribe = []

  const skipUpdate = (key, value) => {
    return !isObjectShallowModified($$lastState[key], value)
  }

  const isObjectShallowModified = (prev, next) => {
    if (null == prev || null == next || typeof prev !== "object" || typeof next !== "object") {
      return prev !== next;
    }
    const keys = Object.keys(prev);
    if (keys.length !== Object.keys(next).length) {
      return true;
    }
    let key;
    for (let i = keys.length - 1; i >= 0, key = keys[i]; i--) {
      if (next[key] !== prev[key]) {
        return true;
      }
    }
    return false;
  }

  let handler = {
    set(target, property, value, receiver) {
      if (property === 'subscribe' && typeof value === 'function') {
        $$lastSubscribe = $$lastSubscribe.concat(value)
        return $$lastState
      }
      if (property === 'unsubscribe' && typeof value === 'function') {
        $$lastSubscribe = $$lastSubscribe.filter(subscribe => subscribe !== value)
      }
      if (!skipUpdate(property, value)) {
        if ($$lastSubscribe.length) {
          $$lastSubscribe.forEach(sub => sub())
        }
        $$lastState[property] = value
        return Reflect.set(target, property, value)
      }

      return $$lastState
    },
    get(target, property, receiver) {
      return Reflect.get(target, property)
    },
    ownKeys(target) {
      return Object.keys(target)
    }
  }

  return new Proxy(obj, handler)
}

export default Observer
