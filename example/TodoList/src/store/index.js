import {
  Observer
} from '../../../../lib'

import todo from './todo'
import todos from './todos'
import view from './view'

const initialState = Object.assign({},
  todo,
  todos,
  view
)

const store = Observer(initialState)

const todoActions = {
  changeTODO(e) {
    store.todo = Object.assign({}, store.todo, {
      title: e.target.value
    })
  },
  clearTODO() {
    store.todo.title = ''
  }
}

const todosActions = {
  addTODO(value) {
    store.todos = store.todos.concat({
      uuid: new Date().getTime(),
      title: value,
      completed: false
    })
  },
  toggleTODO(uuid) {
    store.todos = store.todos.map(todo => {
      if (uuid === todo.uuid) {
        return Object.assign({}, todo, { completed: !todo.completed })
      }
      return todo
    })
  }
}

const filterActions = {
  show(type) {
    store.nowShowing = type
  }
}

export {
  todoActions,
  todosActions,
  filterActions
}
export default store
