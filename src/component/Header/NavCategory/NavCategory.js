import React, { Component } from 'react'
import NavCategoryChild from '../NavCategoryChild/NavCategoryChild'
export default class NavCategory extends Component {
    state={
        isShow:false
    }
    showCategory=(e,type)=>{
        const target=e.currentTarget
        if(type==='enter'){
            target.className+=' active'
        }else{
            target.className='category-item'
        }
    }
    render() {
        const {category}=this.props
        return (
            <ul className='category-list'>
                {
                    category.map(item=>(
                        <li 
                            className='category-item' key={item.href} 
                            onMouseEnter={(e)=>this.showCategory(e,'enter')}
                            onMouseLeave={(e)=>this.showCategory(e,'leave')}
                        >
                            <a className='title' href={item.href}>
                                {item['category-item']}
                                <i className='iconfont icon-next-copy'></i>
                            </a>
                            <NavCategoryChild child={item.childItem} />
                        </li>
                    ))
                }
            </ul>
        )
    }
}
