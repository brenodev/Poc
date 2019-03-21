import React, { Component } from 'react'
import './NotFound.css'
import { Link } from 'react-router-dom'

class NotFound extends Component {
  render () {
    return (
      <>
        <p>Page not found!</p>
        <Link to='/'>Home</Link>
      </>
    )
  }
}

export default NotFound
