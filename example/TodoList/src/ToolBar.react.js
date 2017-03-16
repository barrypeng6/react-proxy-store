import React, { Component } from 'react'
import { ProxyConnectHOC } from '../../../lib'

class ToolBar extends Component {
  constructor() {
    super();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.todo.title !== this.props.todo.title
  }

  render() {
    console.log('ToolBar run')
    const {
      todo
    } = this.props

    const {
      todoActions,
      todosActions
    } = this.props

    return (
      <div>
        <input
          type='text'
          placeholder='type somthing..'
          value={ todo.title }
          onChange={ todoActions.changeTODO }
        />
        <button onClick={ () => {
          todosActions.addTODO(todo.title)
          todoActions.clearTODO()
        } }>ADD TODO</button>
      </div>
    )
  }
}

export default ToolBar
