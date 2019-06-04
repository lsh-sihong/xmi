import React, { Component } from 'react'
import BodyRight from '../BodyRight/BodyRight';

export default class BrickBody extends Component {
    render() {
        const {id,body,select}=this.props
        const {first}=body
        const bricklist=body['brick-list']     
        const firstSize=first.length<2?'item-large':'item-middle' 
        return (
            <div className='body clearFix'>
                <div className='span4 first'>
                    <ul className='brick-list'>
                        {
                            first.map(item=>(
                            <li 
                                className={`brick-item ${firstSize}`}
                                key={item.href}
                                >
                                <a  href={item.href}>
                                    <img alt={item.href} src={item.pic}/>
                                </a>
                            </li> )) 

                        }
                    </ul>
                    
                </div>
                <BodyRight id={id} select={select} bricklist={bricklist}/>
            </div>
            )
        
        
    }
}
