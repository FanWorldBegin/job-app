import {createStore} from 'redux'
const ADD_GUN = 'add_gun'
const MINUS_GUN = 'minus_gun'
//reducer
export function counter(state=0, action) {
  switch (action.type) {
    case 'add_gun':
      return state + 1;
    case 'minus_gun':
      return state - 1;
    default:
    return 10;

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
