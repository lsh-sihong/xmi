import React, { Component } from 'react'
import './LoginBanner.less'
export default class LoginBanner extends Component {
    toIndex=(e)=>{
        
        this.props.history.push('/index')
        return false
    }
    render() {
        return (
            <div className='login-banner'>
                <div className='h-panel'>
                    <div className='h-logo'>
                        <a onClick={this.toIndex}>小米网</a>
                    </div>
                </div>
                <div className='banner-panel'>
                    <a href='https://www.mi.com/mi9/'>小米9</a>
                </div>
            </div>
        )
    }
}
