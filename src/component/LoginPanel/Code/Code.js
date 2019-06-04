import React, { Component } from 'react'

export default class Code extends Component {
    render() {
        return (
            <div className='sm-code'>
                <div className='mask' style={{display:'none'}}>
                </div>
                <div className='tip'>
                    <p class="qr-tip" data-lang-text="loading">{}</p>
                    <p class="qr-retry" data-lang-text="refresh">刷新</p>
                </div>
                <div className='img'>

                </div>
            </div>
        )
    }
}
