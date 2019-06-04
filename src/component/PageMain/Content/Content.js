import React, { Component } from 'react';
import BrickHead from '../BrickHead/BrickHead';
import {Row,Col} from 'antd';
import ContentItem from '../ContentItem/ContentItem';
export default class Content extends Component {
    color=[
        '#ffac13','#83c44e','#e53935','#2196f3'
    ]
    render() {
        const {head,body}=this.props.content
        return (
            <div className='content'>
                <BrickHead head={head}/>
                <Row gutter={14}>
                    {
                        body.map((item,index)=>{
                            //const {title,carseoul}=item
                            const theme=this.color[index]
                            return(
                                <Col key={index} span={6}>
                                    <ContentItem {...item} theme={theme}/>
                                </Col>
                            )
                        })
                    }
                </Row>
            </div>
        )
    }
}
