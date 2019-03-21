import React from 'react'
import {
  Route,
  Redirect
} from 'react-router-dom'
import { fakeAuth } from '../../services/auth-service'
import PropTypes from 'prop-types'

const AuthGuard = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    fakeAuth.isAuthenticated === true
      ? <Component {...props} />
      : <Redirect to={{
        pathname: '/login',
        state: { from: props.path }
      }} />
  )} />
)

AuthGuard.propTypes = {
  component: PropTypes.func.isRequired,
  path: PropTypes.string.isRequired
}

export default AuthGuard
