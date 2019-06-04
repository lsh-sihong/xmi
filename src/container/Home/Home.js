import React, { Component } from 'react'
import TopBar from '../../component/TopBar/TopBar'
import Header from '../../component/Header/Header'
import HomeHero from '../../component/HomeHero/HomeHero'
import PageMain from '../../component/PageMain/PageMain'
import Footer from '../../component/Footer/Footer';
import RightBar from '../../component/RightBar/RightBar';
export default class Home extends Component {

  render() {
    return (      
          <div className='home'>
            <TopBar/>
            <Header/>
            <HomeHero/>
            <PageMain />
            <Footer/>
            <RightBar/>
          </div>
      
    )
  }
}
