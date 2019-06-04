import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {recieveLogout}  from '../../../redux/actions'
class TopBarInfo extends Component {
    infoList=[
        '个人中心','评价晒单','我的喜欢','小米账号','退出登录'
    ]
    state={
        isActive:false
    }
    showInfo=()=>{
        this.setState({
            isActive:!this.state.isActive
        })
    }
    login=()=>{
        this.props.history.push('/login')
    }
    logout=()=>{
        this.props.recieveLogout('退出登录')
    }

    render() {
        const {name}=this.props.log
        const isActive=this.state.isActive?'active':''
        if(name){
            return (
                <div  className='topbar-info f_right'>
                    <span className='user f_left' 
                    onMouseEnter={this.showInfo}
                    onMouseLeave={this.showInfo}
                    >
                        <a onClick={this.login} className='user-name'>
                            {name}
                            <i className='iconfont icon-gengduo'></i>
                        </a>
                        <ul className={`info-list ${isActive}`}>
                            {
                                this.infoList.map(item=>{
                                    if(item==='退出登录'){
                                        return(
                                            <li className='info-item'>
                                                <a onClick={()=>this.logout(item)}>{item}</a>
                                            </li>

                                        )
                                    }else{
                                        return(
                                            <li className='info-item'>
                                                <a >{item}</a>
                                            </li>
                                        )
                                    }
                                })
                                
                            }
                        </ul>
                    </span>
                    <span className='sep'>|</span>
                    <a href='return false' className='message'>消息通知</a>
                    <a href='return false' className='link'>我的订单</a>
                    <span className='sep'>|</span>
                </div>
            )
        }else{
            return (
                <div className='topbar-info f_right'>
                    <a onClick={this.login} className='link'>登录</a>
                    <span className='sep'>|</span>
                    <a href='return false' className='link'>注册</a>
                    <span className='sep'>|</span>
                    <a href='return false' className='message'>消息通知</a>
    
                </div>
            )

        }
    }
}
export default connect(
    state=>({log:state.log}),
    {recieveLogout}
)(withRouter(TopBarInfo))