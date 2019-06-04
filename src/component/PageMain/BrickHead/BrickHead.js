import React, { Component } from 'react'

export default class BrickHead extends Component {
    //static 
    
    getSelect=(index)=>{
        this.props.getSelect(index)
    }

    render() {
        const {id,head,select}=this.props
        const {title,more}=head
        return (
            <div className='head clearFix'>
            <h2 className='title'>{title}</h2>
            {
                more?<div className='more'>
                {
                    (id==='phone'||id==='video')?(
                        <a href={more.href}
                            target='_blank'
                            rel="noopener noreferrer"
                        >
                            {more.text}
                            <i className={`iconfont ${more.icon}`}></i>
                        </a>
                    ):(
                        <ul className='tab-list'>
                            {
                                more.map((tab,index)=>{
                                    const selected=select===index?'active':''
                                    return (
                                    <li 
                                        className={`f_left ${selected}`} 
                                        key={index} 
                                        onMouseEnter={(e)=>this.getSelect(index)}
                                        >{tab}</li>
                                    )
                                })
                            }
                        </ul>
                    )   
                }
            </div>
                :null
            }
            
        </div>
        )
    }
}
