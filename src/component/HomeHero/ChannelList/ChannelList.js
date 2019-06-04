import React, { Component } from 'react'

export default class ChannelList extends Component {
    render() {
        const {channellist}=this.props
        return (
            <div className='channel span4'>
                <ul className='channel-list  clearFix'>
                    {
                        channellist.map(channel=>{
                            return (
                                <li className='f_left' key={channel.text}>
                                    <a 
                                        href={channel.href} 
                                        alt={channel.text} 
                                        target='_blank'
                                        rel="noopener noreferrer"
                                    >
                                        <i className={`iconfont ${channel.icon}`}></i>
                                        <span>{channel.text}</span>
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
