import React, { Component } from 'react'

export default class NavCategoryChild extends Component {

    chunk=(array,size)=>{
        const newArr=[]
        const len=array.length
        for(let i=0;i<len;i+=size){
            newArr.push(array.slice(i,i+size))
        }
        return newArr
    }
    render() {
        const {child}=this.props
        const uls=this.chunk(child,6)
        const width=uls.length>3?'248px':'265px'

        return (
            <div className='children clearFix'  >
                {
                    uls.map((col,index)=>{
                        return (
                        <ul className={`child-list child-list-col child-list-col${index+1}`}
                            style={{width:width}}
                            key={index}
                        >
                            {
                                col.map(li=>(
                                    <li key={li.href}>
                                        <a href={li.href} className='link'>
                                            <img src={li.pic} alt={li.text}/>
                                            <span className='text'>{li.text}</span>
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                        )
                    })
                }
            </div>
        )
    }
}
