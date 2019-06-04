import React, { Component } from 'react'
import BrickHead from '../BrickHead/BrickHead';
import {Row,Col} from 'antd'
export default class Comment extends Component {
    render() {
        const {head,body}=this.props.comment
        return (
            <div className='comment'>
                <BrickHead head={head}/>
                <Row gutter={14}>                   
                    {
                        body.map(item=>{
                            const {href,pic,price,title,review}=item
                            const {reviewHref,reviewContent,author}=review
                            return (
                                
                                    <Col key={href} span={6} >
                                        <div className='comment-item'>
                                            <div className='figure'>
                                                <a href={href}>
                                                    <img src={pic} alt={title}/>
                                                </a>
                                            </div>
                                            <div className='relatedInfo'>
                                                <p className='review'>
                                                    <a href={reviewHref}>
                                                        {
                                                            reviewContent
                                                        }
                                                    </a>
                                                </p>
                                                <p className='author'>
                                                    {author}
                                                </p>
                                                <div className='info'>
                                                    <a href={href}>{title}</a>
                                                    <span className='sep'>|</span>
                                                    <span className='price'>{price}元</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                            )
                        })
                    }
                </Row>
            </div>
        )
    }
}
