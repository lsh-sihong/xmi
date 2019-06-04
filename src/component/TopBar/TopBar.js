import React, { Component } from 'react'
import TopBarNav from './TopBarNav/TopBarNav'
import TopBarCart from './TopBarCart/TopBarCart'
import TopBarInfo from'./TopBarInfo/TopBarInfo'
import './TopBar.less'
export default class TopBar extends Component {

  render() {
    return (
      <div className='site-topbar'>
        <div className='container clearFix'>
          <TopBarNav />
          <TopBarCart/>
          <TopBarInfo/>
        </div>      
      </div>

    )
  }
}
