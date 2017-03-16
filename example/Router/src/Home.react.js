import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {
  constructor(props, context) {
    super(props, context)
  }

  componentDidMount() {
    if (this.props.title === 'home') {
      this.props.onChangeHomeTitle.changeHomeTitle('123')
    }
  }

  render() {
    return (
      <div>
        HI, { this.props.title } <br />
        <button onClick={ () => this.props.title === '123' ? this.props.onChangeHomeTitle.changeHomeTitle('456') : this.props.onChangeHomeTitle.changeHomeTitle('123') }>Change Title</button><br />
        <Link to='welcome'>Go To Welcome</Link>
      </div>
    )
  }
}

export default Home
