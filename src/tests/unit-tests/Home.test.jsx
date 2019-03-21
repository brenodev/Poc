import React from 'react'
import ReactDOM from 'react-dom'
import Home from '../../pages/Home/Home'
import configureMockStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

it('renders without crashing', () => {
  const div = document.createElement('div')
  const mockStore = configureMockStore([])
  const store = mockStore({ counterReducer: { counter: 0 } })
  ReactDOM.render(<Provider store={store}>
    <Router>
      <Home />
    </Router>
  </Provider>, div)
  ReactDOM.unmountComponentAtNode(div)
})
