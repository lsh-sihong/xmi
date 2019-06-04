import React, { Component ,Fragment} from 'react'
import {Input,Form} from 'antd'
const {Password}=Input
const FormItem = Form.Item;
export default class NormalLogin extends Component {

    handleChange=(type,val)=>{
        this.props.handleChange(type,val)
        this.setState({
            [type]:val
        })
    }
    render() {
        const {username,password}=this.props
        return (
            <Fragment>                
                <div className='input normal'>
                    <Input 
                        type='text' 
                        placeholder='邮箱/手机号码/小米ID'
                        autocomplete="off"
                        value={username}
                        onChange={e=>this.handleChange('username',e.target.value)} 
                    />

                </div>
                <div className='input normal'>
                    <Password
                        type='password' 
                        placeholder='密码'
                        autocomplete="off"
                        value={password}
                        visibilityToggle={false}
                        onChange={e=>this.handleChange('password',e.target.value)} 
                    />

                </div>
            </Fragment>
            
        )
    }
}
