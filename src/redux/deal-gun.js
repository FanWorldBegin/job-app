import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addGun, minusGun, addGunAsync } from './index.redux.js'

class DealGun extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount(){

  }

  render() {
    const num = this.props.num;
    const addGun = this.props.addGun;
    const minusGun = this.props.minusGun;
    const addGunAsync = this.props.addGunAsync;
    console.log(this.props);
    return (
      <div>
        <h1>现在有机枪 {num} 把</h1>
        <button onClick={addGun}>申请武器</button>
        <button onClick={minusGun}>上交武器</button>
        <button onClick={addGunAsync}>拖两秒给</button>
      </div>
    )
  }
}

//将state 传入number中
const mapStatetoProps = (state) => {
  return {num: state}
}

const actionCreators = {addGun, minusGun, addGunAsync}

DealGun = connect(mapStatetoProps, actionCreators)(DealGun)
export default DealGun
