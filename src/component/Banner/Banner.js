import React, { Component } from 'react'
import './Banner.less'
export default class Banner extends Component {
    
    render() {
        const {banner}=this.props
        if(banner){
            return (
                <div className='banner'>
                    <a href={banner.href}                       
                    >
                        <img src={banner.pic} alt={banner.text}/>
                    </a>
                </div>
            )
        }else{
            return null
        }
    }
}
