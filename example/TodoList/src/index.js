import React, { Component } from 'react'
import { render } from 'react-dom'
import { ProxyProvider, ProxyConnectHOC } from '../../../lib'

import store from './store'
import {
  todoActions,
  todosActions,
  filterActions
} from './store'

import ToolBar from './ToolBar.react'
import TodoList from './TodoList.react'

class MainContainer extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const {
      todos,
      nowShowing,
      todo
    } = this.props.store

    const {
      todoActions,
      todosActions,
      filterActions
    } = this.props

    return (
      <div>
        <ToolBar
          todo={ todo }
          todoActions={ todoActions }
          todosActions={ todosActions }
        />
        <TodoList
          todos={ todos }
          nowShowing={ nowShowing }
          todosActions={ todosActions }
          filterActions={ filterActions }
        />
      </div>
    )
  }
}

const MainConector = ProxyConnectHOC(MainContainer)

render(
  <ProxyProvider store={ store }>
    <MainConector
      todoActions={ todoActions }
      todosActions={ todosActions }
      filterActions={ filterActions }
    />
  </ProxyProvider>
, document.getElementById('view'))
