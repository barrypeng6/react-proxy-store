const Observer = (obj, update) => {
  let $$lastState = obj

  const skipUpdate = (key, value) => {
    return value === $$lastState[key]
  }

  let handler = {
    set(receiver, name, value) {
      if (!skipUpdate(name, value)) {
        update()
        $$lastState[name] = value
      }
      return Reflect.set(receiver, name, value)
    }
  }

  return new Proxy(obj, handler)
}

module.exports = Observer
