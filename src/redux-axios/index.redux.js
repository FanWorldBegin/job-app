import {createStore} from 'redux'
import axios from 'axios'
const ADD_GUN = 'add_gun'
const MINUS_GUN = 'minus_gun'
const USER_DATA = 'USER_DATA'
//reducer

const initState = {
  num: 10

}
var a = 10;
export function counter(state=initState, action) {
  console.log(state, action);
  switch (action.type) {
    case 'add_gun':
      return {...state, num: ++state.num};
    case 'minus_gun':
      return {...state, num: --state.num};
    case USER_DATA:
      return {...state, userInfo: action.payload}
    default:
    return state;

  }
}

// action  creator
export function addGun() {
  return {type: ADD_GUN }
}


// action  creator
export function minusGun() {
  return {type: MINUS_GUN }
}

// action  creator
export function addGunAsync() {
  return dispach => {
    setTimeout(()=> {
      dispach(addGun())
      console.log('sfs');
    }, 2000)
  }
}

//action
export function userData(data) {
  return {type: 'USER_DATA', payload: data}
}

export function getUserData() {
  return dispach => {
    axios.get('/data').then(res => {
      if(res.status == 200) {
        dispach(userData(res.data)); //dispach action
      }
    })
  }
}
