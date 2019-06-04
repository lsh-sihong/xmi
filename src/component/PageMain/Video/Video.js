import React, { Component } from 'react'
import BrickHead from '../BrickHead/BrickHead';
import VideoItem from '../VideoItem/VideoItem';
import {Row, Col} from 'antd'
export default class Video extends Component {
    render() {
        const {id,head,body}=this.props.video
        return (
            <div className='video'>
                <BrickHead id={id} head={head}/>
                <Row className='body' gutter={14}>
                    {
                        body.map((item,index)=>{
                            
                            return(
                                <Col key={index} span={6}>
                                    <VideoItem key={index} {...item}/>
                                </Col>
                            )
                        })
                    }
                </Row>
            </div>
        )
    }
}
