import React, { Component } from 'react'
import LoginBanner from '../../component/LoginBanner/LoginBanner'
import LoginPanel from '../../component/LoginPanel/LoginPanel';
export default class Login extends Component {
    render() {
        const {history}=this.props
        return (
            <div className='login'>
                <div className='wrapper'>
                    <LoginBanner history={history}/>
                    <LoginPanel/>
                </div>
            </div>
        )
    }
}
