import React, { Component } from 'react'
import './ServicePage.css'
import { getExample } from '../../services/app-service'
import { Link } from 'react-router-dom'

class ServicePage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      responseData: undefined
    }
  }

  componentDidMount () {
    getExample()
      .then(result => {
        this.setState({ responseData: result.data })
      })
      .catch(error => console.log(error))
  }

  render () {
    return (
      <>
        <Link to='/'>Home</Link>
        {this.renderReturn()}
      </>
    )
  }

  renderReturn () {
    if (this.state.responseData !== undefined) {
      return (
        <>
          <h1>Results</h1>
          <p>UserId: {this.state.responseData.userId}</p>
          <p>Title: {this.state.responseData.title}</p>
        </>
      )
    } else {
      return <p>Nothing here</p>
    }
  }
}

export default ServicePage
