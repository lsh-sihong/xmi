import React, { Component } from 'react'
import BrickItem from '../BrickItem/BrickItem';

export default class BodyRight extends Component {
    render() {
        const {bricklist,id,select}=this.props
        return (
            <div className='span16'>
                {
                    bricklist.map((list,index)=>{
                        return (
                            <ul className='brick-list clearFix'
                                key={index}
                                style={{display:index===select?'block':'none'}}
                            >
                                {
                                    list.map((item,index)=>{
                                        const size=(list.length>=9&&index>6)?'item-s':'item-m'
                                        const isPhone=id==='phone'?'item-2':""
                                        return (
                                            <BrickItem key={index} {...item} size={size} isphone={isPhone}/>
                                            )
                                        }
                                    )
                                }
                            </ul>
                        )
                    })
                }
            </div>
        )
    }
}
