import React, { Component } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'

import AuthGuard from './components/AuthGuard/AuthGuard'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import NotFound from './pages/NotFound/NotFound'
import Forms from './pages/Forms/Forms'
import ServicePage from './pages/ServicePage/ServicesPage'

class App extends Component {
  render () {
    return (
      <>
        <HashRouter>
          <Switch>
            <Route path='/login' exact component={Login} />
            <AuthGuard path='/' exact component={Home} />
            <AuthGuard path='/forms' component={Forms} />
            <AuthGuard path='/service' component={ServicePage} />
            <Route path='*' component={NotFound} />
          </Switch>
        </HashRouter>
      </>
    )
  }
}

export default App
