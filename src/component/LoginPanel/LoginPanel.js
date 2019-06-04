import React, { Component, Fragment } from 'react'
import {Redirect} from 'react-router-dom'
import {Button} from 'antd'
import NormalMethod from './NormalMethod/NormalMethod'
import './LoginPanel.less'
import PhoneMethod from './PhoneMethod/PhoneMethod'
import Code from './Code/Code'
import {connect} from 'react-redux'
import {reqLogin} from '../../redux/actions'
class LoginPanel extends Component {
    state={
        username:'',
        password:'',  
        phone:'',
        code:'',
        normalMethod:true,
        normalLogin:true
    }
    othertype=[
        {
            icon:'icon-QQ',
            color:'#0288d1'
        },
        {
            icon:'icon-weibo',
            color:'#d32f2f'
        },
        {
            icon:'icon-alipay',
            color:'#0ae'
        },
        {
            icon:'icon-weixin',
            color:'#00d20d'
        },
    ]
    changeLoginMethod=()=>{
        this.setState({
            normalMethod:!this.state.normalMethod
        })
    }
    
    changePan=(type)=>{
        const {normalLogin}=this.state
        if(normalLogin===type) return;
        if(type){
            this.setState({
                normalLogin:true
            })

        }else{
            this.setState({
                normalLogin:false
            })
        }
    }
    handleChange=(type,val)=>{
        this.setState({
            [type]:val
        })
    }
    handlelLogin=(type)=>{
        
        this.props.reqLogin(type,this.state)
        this.setState({
            username:'',
            password:'',  
            phone:'',
            code:'',
        })
    }
    
    render() {
        const {name}=this.props.log
        console.log(this.props.log)
        if(name){
            return <Redirect to='/'/>
        }
        
        const {normalMethod,errTip,normalLogin}=this.state
        const othertype=this.othertype
        const button=normalMethod?'登录':'立即登录/注册'
        return (
            <div className='login-panel'>
                <div className='form'>
                    <div className='mainbox'>
                        <div className='nav-tab'>
                            <a 
                                className={`link ${normalLogin?'active':''}`} 
                                onClick={()=>this.changePan(true)}>账号登录</a>
                            <span className='sep'></span>
                            <a 
                                className={`link ${!normalLogin?'active':''}`}
                                onClick={()=>this.changePan(false)}>扫码登录</a>
                        </div>
                        {
                            normalLogin?
                          <div className='login-area'>
                            {
                                normalMethod?
                                <NormalMethod {...this.state} handleChange={this.handleChange}/>:
                                <PhoneMethod {...this.state} handleChange={this.handleChange}/>
                            }
                            <div className='err-tip'>{errTip}</div>
                            <div className='login-btn'>
                                <Button type='primary' block
                                    onClick={()=>this.handlelLogin(normalLogin)}
                                >{button}</Button>
                            </div>
                        
                            <div className='other-method'>
                                {
                                    normalMethod?                                    
                                    <span  className='pan'>
                                        <span><a href='javascript:;' onClick={this.changeLoginMethod}>手机短信登录/注册</a></span>
                                        <span  className='right f_right'>
                                            <a>立即注册</a>
                                            <span className='sep'>|</span>
                                            <a> 忘记密码?</a>
                                        </span>
                                    </span>:
                                    <span className='pan'><a href='javascript:;' onClick={this.changeLoginMethod}>用户名密码登录</a></span>

                                }

                                <div className='others'> 
                                    <fieldset className='title'>
                                        <legend className='text' align='center'>其他方式登录</legend>
                                    </fieldset>
                                    <div className='links'>
                                        {
                                            othertype.map(item=>(
                                                <a href='javascript:;' style={{color:item.color}}>
                                                    <i className={`iconfont ${item.icon}`}></i>
                                                </a>

                                            ))
                                        }
                                        
                                    </div>
                                </div>
                            </div>
                        </div>:
                        <div className='sm-login'>
                            <div className='code'>
                                <Code/>
                            </div>
                        </div>  
                        }
                        

                        
                    </div>
                </div>
            </div>
        )
    }
}
export default connect(
    state=>({log:state.log}),
    {reqLogin}
)(LoginPanel)