import React, { Component } from 'react'
import Detail from '../Detail/Detail'
import NavCategory from '../NavCategory/NavCategory'
export default class HeaderNav extends Component {
    changeDetail=(type,index)=>{
        
        if(type==='hasChild'){
    
            this.props.selectNav(index)
            this.props.slideshow('in')
        }else{   
            this.props.selectNav(null)
            this.props.slideshow('out')
        }


    }
    slideshow=(type)=>{
        this.props.slideshow(type)
    }
    render() {
        const {navlist,category}=this.props
        return (
            <ul className='nav-list clearFix' >
                <li 
                    className='nav-category f_left' 
                    >
                    <a className='link-category' href="//list.mi.com">
                        <span className='text'>
                            全部商品分类  
                        </span>                       
                    </a>
                    <div className='site-category' 
                    onMouseEnter={(e)=>this.changeDetail('noshow')} 
                    >    
                        <NavCategory category={category}/>
                    </div>
                </li>
                {
                    navlist.map((item,index)=>{
                        const child=item['child']
                        if(child){
                            return(
                            <li 
                                className='nav-item f_left' 
                                key={index} 
                                onMouseEnter={(e)=>this.changeDetail('hasChild',index)} 
                                                               
                            >
                                <a className='link' href="return false">
                                    {item['nav-item']}
                                </a>                  
                                <Detail child={child} />                                            
                            </li> 
                                )
                        }else{
                            return(
                                <li 
                                    className='nav-item f_left' 
                                    onMouseEnter={(e)=>this.changeDetail('noChild',index)} 
                                    key={index}
                                    >
                                    <a 
                                        className='link' 
                                        rel="noopener noreferrer" 
                                        target='_blank' 
                                        href={item.href}>
                                        {item.text}
                                    </a>
                                </li> 
                            )
                        }
                    }
                )
            }                  
            </ul>               

        )
    }
}
