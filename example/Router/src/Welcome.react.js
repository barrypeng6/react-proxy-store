import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Welcome extends Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    return (
      <div>
        HI, Welcome <br />
        <Link to='/'>Go To Home</Link>
      </div>
    )
  }
}

export default Welcome
