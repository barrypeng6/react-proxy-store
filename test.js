const ObserverState = require('./index')
const assert = require('assert')

let trigger = 0

let state = ObserverState({ num: 0 }, () => trigger++ )

console.log('1. test state num to 1 and trigger callback')
console.time('first test')
state.num = 1

assert.equal(state.num, 1)
assert.equal(trigger, 1)
console.timeEnd('first test')

console.log('2. test state num the same, dont trigger callback')
console.time('second test')
state.num = 1

assert.equal(trigger, 1)
console.timeEnd('second test')

console.log('3. test state num to 5 and trigger callback')
console.time('third test')
state.num = state.num + 1
state.num = state.num + 1
state.num = state.num + 1
state.num = state.num + 1

assert.equal(state.num, 5)
assert.equal(trigger, 5)
console.timeEnd('third test')
