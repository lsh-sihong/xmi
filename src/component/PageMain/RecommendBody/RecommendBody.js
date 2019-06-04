import React, { Component } from 'react'
import {Carousel} from 'antd'
export default class RecommendBody extends Component {
    ref=React.createRef()
    componentDidMount() {
        this.props.onRef(this.ref)
    }
    
    render() {
        const {body}=this.props
        const setting={
            slidesToShow:5,
            slidesToScroll:5,
            dots:false
        }
        return (
            <div className='body'>
                <Carousel {...setting} ref={this.ref}>
                    {
                        body.map(item=>{
                            return (
                                <div key={item.href} className='recommend-item'>
                                    <a  className='pic' href={item.href}>
                                        <img src={item.pic} alt={item.text}/>
                                    </a>
                                    <p className='name'>
                                        <a href={item.href}>
                                            {item.text}
                                        </a>
                                    </p>
                                    <p className='price'>{item.price}</p>
                                    <p className='tip'>{item.rank}</p>
                                </div>
                            )
                        })
                    }
                </Carousel>
            </div>
        )
    }
}
