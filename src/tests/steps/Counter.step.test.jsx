import { defineFeature, loadFeature } from 'jest-cucumber'
import React from 'react'
import TestRenderer from 'react-test-renderer'
import Counter from '../../components/Counter/Counter'
import configureMockStore from 'redux-mock-store'
import { Provider } from 'react-redux'

const feature = loadFeature('./src/tests/features/Counter.feature')

defineFeature(feature, test => {
  test('showing 1 initially', ({ given, when, then }) => {
    let testInstance
    const mockStore = configureMockStore([])
    const store = mockStore({ counterReducer: { counter: 1 } })

    given('mount counter', () => {
      const testRenderer = TestRenderer.create(
        <Provider store={store}>
          <Counter
            value={store.getState().counterReducer.counter}
            onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
            onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
          />
          )
        </Provider>
      )
      testInstance = testRenderer.root
    })

    when('initially', () => {
      // INITIALLY
    })

    then('showing 1', () => {
      const divInstance = testInstance.findByProps({ id: 'rootCounter' })
      expect(divInstance.props.children).toBe(1)
    })
  })

  test('clicking - decrements', ({ given, when, then }) => {
    let testInstance
    const mockStore = configureMockStore([])
    const store = mockStore({ counterReducer: { counter: 1 } })

    given('mount counter', () => {
      const testRenderer = TestRenderer.create(
        <Provider store={store}>
          <Counter
            value={store.getState().counterReducer.counter}
            onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
            onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
          />
        </Provider>
      )
      testInstance = testRenderer.root
    })

    when('clicking -', () => {
      const buttonInstance = testInstance.findByProps({ children: '-' })
      buttonInstance.props.onClick()
    })

    then('showing 0', () => {
      // Because it's a redux component, we expect that action performed is equal than expected.
      const actions = store.getActions()
      const expectedPayload = { type: 'DECREMENT' }
      expect(actions).toEqual([expectedPayload])
    })
  })

  test('clicking + increments', ({ given, when, then }) => {
    let testInstance
    const mockStore = configureMockStore([])
    const store = mockStore({ counterReducer: { counter: 1 } })

    given('mount counter', () => {
      const testRenderer = TestRenderer.create(
        <Counter
          value={store.getState().counterReducer.counter}
          onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
          onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
        />
      )
      testInstance = testRenderer.root
    })

    when('clicking +', () => {
      const buttonInstance = testInstance.findByProps({ children: '+' })
      buttonInstance.props.onClick()
    })

    then('showing 2', () => {
      // Because it's a redux component, we expect that action performed is equal than expected.
      const actions = store.getActions()
      const expectedPayload = { type: 'INCREMENT' }
      expect(actions).toEqual([expectedPayload])
    })
  })
})
