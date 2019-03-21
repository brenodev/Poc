import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Counter extends Component {
  render () {
    const { value, onIncrement, onDecrement } = this.props
    return (
      <>
        <button onClick={onIncrement}>+</button>
        <div id='rootCounter'>{value}</div>
        <button onClick={onDecrement}>-</button>
      </>
    )
  }
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
}

export default Counter
