import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addGun, minusGun, addGunAsync, getUserData } from './index.redux.js'
import axios from 'axios'
import '../config/config.js'

@connect(
  //需要什么属性放到props里面
  state => ({counter: state}),
  //需要什么方法放入props里面  自动dispach
  {addGun, minusGun, addGunAsync, getUserData}
)


class DealGun extends Component {
  constructor(props) {
    super(props);
    this.state={
      data: {}
    }
  }
  componentDidMount(){
    this.props.getUserData();
    // axios.get('/data').then(res => {
    //   console.log('axios:');
    //   console.log(res);
    //
    //   if(res.status == 200) {
    //     this.setState({data: res.data})
    //   }
    // })
  }

  render() {
    const num = this.props.counter.num;
    const addGun = this.props.addGun;
    const minusGun = this.props.minusGun;
    const addGunAsync = this.props.addGunAsync;
    console.log( this.state.data);
    console.log(this.props);
    console.log(this.props);
    return (
      <div>
        {/* {
           this.state.data.length ?  <h1>名字为：{this.state.data[0].user}</h1> : null
        } */}
        <h1>名字为：{this.props.counter.userInfo ? this.props.counter.userInfo[0].user : null}</h1>
        <h1>现在有机枪 {num} 把</h1>
        <button onClick={addGun}>申请武器</button>
        <button onClick={minusGun}>上交武器</button>
        <button onClick={addGunAsync}>拖两秒给</button>
      </div>
    )
  }
}

// //将state 传入number中
// const mapStatetoProps = (state) => {
//   return {num: state}
// }
//
// const actionCreators = {addGun, minusGun, addGunAsync}
//DealGun = connect(mapStatetoProps, actionCreators)(DealGun)

export default DealGun
