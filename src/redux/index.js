import React, {Component} from 'react'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import  DealGun from './deal-gun.js'
import store from './store.js'
export default class ReduxExample extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount(){

  }

  render() {
    return (
      <div>
        <Provider store={store}>
          <DealGun />
        </Provider>
      </div>
    )
  }
}
