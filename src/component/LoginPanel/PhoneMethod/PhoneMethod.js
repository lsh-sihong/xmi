import React, { Component,Fragment } from 'react'
import {Input,Button,Form} from 'antd'
const FormItem = Form.Item;
const InputGroup = Input.Group;
export default class PhoneMethod extends Component {
    
    handleChange=(type,val)=>{
        this.props.handleChange(type,val)
        this.setState({
            [type]:val
        })
    }
    render() {
        const {phone,code}=this.props
        return (
            <Fragment >
                <div className='input phone'>
                    <InputGroup compact>
                        <Input style={{ width: '20%' }} 
                            defaultValue="+86" />
                        <Input style={{ width: '80%' }}
                            value={phone}
                            onChange={e=>this.handleChange('phone',e.target.value)}
                            placeholder='手机号码' />
                    </InputGroup>
                </div>
                <div className='input phone'>
                <InputGroup compact>
                        <Input style={{ width: '65%' }}
                            value={code} 
                            onChange={e=>this.handleChange('code',e.target.value)}
                            placeholder="短信验证码" />
                        <Button style={{ width: '35%' }}  ><a>获取验证码</a></Button>
                </InputGroup>
                </div>
                
            </Fragment>
        )
    }
}
