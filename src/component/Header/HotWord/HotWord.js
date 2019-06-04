import React, { Component } from 'react'

export default class HotWord extends Component {
    render() {
        const {hotword}=this.props
        return (
            <div>
                {
                    hotword.map(item=>(
                        <a  href={item.href} className='hot-word-item' key={item.text}>{item.text}</a>
                    ))
                }
            </div>
        )
    }
}

