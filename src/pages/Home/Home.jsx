import React, { Component } from 'react'
import './Home.css'
import Counter from '../../components/Counter/Counter'
import Logo from '../../assets/img/logo.svg'
import { Redirect, NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { fakeAuth } from '../../services/auth-service'

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      redirectToReferrer: false
    }
    this.logout = this.logout.bind(this)
  }

  logout () {
    fakeAuth.signout()
    this.setState({
      redirectToReferrer: true
    })
  }

  render () {
    const { currentValue, onIncrement, onDecrement } = this.props
    const { redirectToReferrer } = this.state
    const { from } = { from: { pathname: '/login' } }

    if (redirectToReferrer === true) {
      return <Redirect to={from} />
    }
    return (
      <div className='home'>
        <NavLink to='/service'>Service Test</NavLink>
        <NavLink to='/forms'>Form test</NavLink>
        <button onClick={this.logout}>Log Out</button>
        <header className='home-header'>
          <img src={Logo} className='home-logo' alt='logo' />
          <h1 className='home-title'>Welcome to React ...</h1>
        </header>
        <Counter
          value={currentValue}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
        />
      </div>
    )
  }
}

const mapStateToProps = store => ({
  currentValue: store.counterReducer.counter
})

const mapDispatchToProps = dispatch => ({
  onIncrement: () => dispatch({ type: 'INCREMENT' }),
  onDecrement: () => dispatch({ type: 'DECREMENT' })
})

Home.propTypes = {
  currentValue: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Home)
)
