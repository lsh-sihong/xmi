import React, { Component } from 'react'
import { Carousel } from 'antd';
export default class HomeHeroSlider extends Component {
    ref = React.createRef();
    prev=()=>{
        this.ref.current.prev()
    }
    next=()=>{
        this.ref.current.next()
    }
    render() {
        const {slider}=this.props
        if(slider.href!=='')
        {
            return (
            <div className='home-hero-slider'>            
                <Carousel 
                    effect="fade" 
                    autoplay
                    ref={this.ref}
                >
                    {
                        slider.map(slide=>{
                            return(
                                <div className='slide' key={slide.href}>
                                    <a href={slide.href} className='item'
                                        target='_blank'
                                        rel="noopener noreferrer"
                                    >
                                        <img src={slide.pic} alt={slide.href}/>
                                    </a>
                                </div>
                            )
                        }

                        )
                    }
                </Carousel>
                <a href='javascript:void(0);' className='prev button' onClick={this.prev}>上一张</a>
                <a href='javascript:void(0);' className='next button' onClick={this.next}>下一张</a>
            </div>)
            }
        
    }
}
