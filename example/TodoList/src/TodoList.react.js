import React, { Component } from 'react'
import { ProxyConnectHOC } from '../../../lib'

class TodoList extends React.PureComponent {
  constructor(props, context) {
    super(props, context)
  }

  getVisibleTodos() {
    const {
      todos,
      nowShowing
    } = this.props

    return todos.filter(todo => {
      if (nowShowing === 'SHOW_ACTIVE') {
        return !todo.completed
      }
      if (nowShowing === 'SHOW_COMPLETED') {
        return todo.completed
      }
      if (nowShowing === 'SHOW_ALL') {
        return true
      }
    })
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.todos !== this.props.todos ||
            nextProps.nowShowing !== this.props.nowShowing
  }

  render() {
    console.log('TodoList run')
    const {
      todosActions,
      filterActions
    } = this.props

    const {
      todo
    } = this.props

    return (
      <div>
        <button onClick={ () => filterActions.show('SHOW_ALL') }>SHOW ALL</button>
        <button onClick={ () => filterActions.show('SHOW_ACTIVE') }>SHOW ACTIVE</button>
        <button onClick={ () => filterActions.show('SHOW_COMPLETED') }>SHOW COMPLETED</button>
        {
          this.getVisibleTodos.call(this).map((todo, index) => {
            return (
              <div key={`${todo.title}-${index}`}>
                uuid-{ todo.uuid }. { todo.title } / { todo.completed ? 'Completed' : 'Active' }
                {' - '}
                <button onClick={ () => todosActions.toggleTODO(todo.uuid) }>
                  { todo.completed ? 'Active' : 'Completed' }
                </button>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default TodoList
