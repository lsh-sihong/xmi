import React, { Component } from 'react'
import {Col} from 'antd'
export default class FootLink extends Component {
    render() {
        const {title,sub}=this.props
        
        return (
            <Col className='link-item f_left' span={4}>
                <dl>
                    <dt className='title'>{title}</dt>
                    {
                        sub.map(item=>{
                            const {href,text}=item
                            return (
                                <dd><a href={href}>{text}</a></dd>
                                )
                            }
                        )
                    }
                </dl>
            </Col>
        )
    }
}
