import React, { Component } from 'react'
import {connect} from 'react-redux'
import './Header.less'
import NavItem from './NavItem/NavItem'
import {reqNavLists,reqCategory} from '../../redux/actions'
import SearchBox from '../Header/SearchBox/SearchBox'
import Detail from './Detail/Detail';
class Header extends Component {
    state={
        selectNavIndex:null,
        slideshow:''
    }
    componentDidMount() {
      this.props.reqNavLists()
      this.props.reqCategory()
    }
    selectNav=(selectNavIndex)=>{
        this.setState({
            selectNavIndex,
        })
        
    }
    slideshow=(inout)=>{
        if(inout==='in'){
            this.setState({
                slideshow:'nav-menu-active',
            })
        }else{
            this.setState({
                slideshow:''
            })
        }
    }
    render() {
        const {navlist}=this.props.navlist;
        const {categorylist}=this.props.category;
        const {selectNavIndex,slideshow}=this.state
        var children
        if(selectNavIndex!==null&&selectNavIndex>=0&&selectNavIndex<=7){
            children=navlist[selectNavIndex].child
        }else{
            children=null
        }
        return (
            <div className='container header'>
                <div className='header-logo f_left'>
                    <a className='logo' href='//www.mi.com/index.html'>
                    <span>小米官网</span>
                    </a>
                </div>
                <div className='header-nav f_left'
                    onMouseEnter={()=>this.slideshow('in')}
                    onMouseLeave={()=>this.slideshow('out')}
                    >
                    <NavItem 
                        navlist={navlist} 
                        category={categorylist}
                        selectNav={this.selectNav}
                        slideshow={this.slideshow}
                        />
                </div>
                <div className='header-search f_right'>
                    <SearchBox/>
                </div>
                <div className={`nav-menu ${slideshow}`}
                     onMouseEnter={()=>this.slideshow('in')}
                     onMouseLeave={()=>this.slideshow('out')}
                >
                    <Detail child={children} />
                </div>
            </div>
        )
    }
}
export default connect(
    state=>({navlist:state.navlist,category:state.category}),{reqNavLists,reqCategory}
)(Header)
