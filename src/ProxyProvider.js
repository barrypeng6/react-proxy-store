import React, { Component } from 'react'

class ProxyProvider extends Component {

  getChildContext() {
    return {
      store: this.store
    }
  }

  constructor(props, context) {
    super(props);

    this.store = props.store
  }

  render() {
    return (
      React.Children.only(this.props.children)
    )
  }
}

ProxyProvider.childContextTypes = {
  store: React.PropTypes.object
}

export default ProxyProvider
