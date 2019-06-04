import React, { Component } from 'react'

export default class VideoItem extends Component {
    render() {
        const {desc,href,pic,text}=this.props
        return (
            <div className='video-item'>                
                <div className='figure'>
                    <a data-video={href}>
                        <img src={pic} alt={text}/>
                        <span className='play'><i className='iconfont icon-play1'></i></span>
                    </a>
                </div>
                <h3 className='title'>
                    <a data-video={href}>
                        {
                            text
                        }
                    </a>
                </h3>
                <p className='desc'>{desc}</p>
            </div>
        )
    }
}
