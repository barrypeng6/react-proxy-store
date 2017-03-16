import hoistStatics from 'hoist-non-react-statics'
import React, { Component } from 'react'

const ProxyConnectHOC = (WrapperComponent) => {

  const generateProxyIntoObject = (proxyObject) => {
    let $$cloneProxyIntoObjectStore = {}
    Reflect.ownKeys(proxyObject).forEach(key => {
      Object.assign($$cloneProxyIntoObjectStore, { [key]: proxyObject[key] })
    })
    return $$cloneProxyIntoObjectStore
  }

  class ProxyConnect extends Component {
    constructor(props, context) {
      super(props, context);

      this.store = props.store || context.store
      this.store.subscribe = React.Component.prototype.forceUpdate.bind(this)
    }

    componentWillUnmount() {
      this.store.unsubscribe = this.store.subscribe
    }

    render() {
      return (
        React.createElement(WrapperComponent, Object.assign({}, this.props, {
          store: generateProxyIntoObject(this.store)
        }))
      )
    }
  }

  ProxyConnect.contextTypes = {
    store: React.PropTypes.object
  }

  return hoistStatics(ProxyConnect, WrapperComponent)
}

export default ProxyConnectHOC
