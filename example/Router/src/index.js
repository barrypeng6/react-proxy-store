import React, { Component } from 'react'
import { render } from 'react-dom'
import { ProxyProvider, ProxyConnectHOC } from '../../../lib'

import store from './store'
import {
  homeAction
} from './store'

import Home from './Home.react'
import Welcome from './Welcome.react'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class Main extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const {
      title
    } = this.props.store

    return (
      <div>
        <Route exact path="/" render={ () => {
          return (
            <Home
              title={ title }
              onChangeHomeTitle={ this.props.onHomeAction }
            />
          )
        } } />
        <Route exact path="/welcome" render={ () => {
          return (
            <Welcome
              title={ title }
              onChangeHomeTitle={ this.props.onHomeAction }
            />
          )
        } } />
      </div>
    )
  }
}

const MainConnector = ProxyConnectHOC(Main)

render(
  <Router>
    <ProxyProvider store={ store }>
      <MainConnector onHomeAction={ homeAction } />
    </ProxyProvider>
  </Router>
, document.getElementById('view'))
