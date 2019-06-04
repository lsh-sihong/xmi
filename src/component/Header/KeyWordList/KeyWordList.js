import React, { Component } from 'react'

export default class KeyWordLIst extends Component {
    render() {
        const {keyword}=this.props
        return (
            <ul className='result-list'>
                {
                    keyword.map(item=>(
                        <li key={item.text}>
                            <a href={item.href}>
                                {item.text}
                                <span>
                                    {item.result}
                                </span>
                            </a>
                        </li>
                    ))
                }
            </ul>
        )
    }
}
