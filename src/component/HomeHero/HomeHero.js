import React, { Component } from 'react'
import {connect} from 'react-redux'
import {reqSlider,reqSub} from '../../redux/actions'
import {reqBanner} from '../../api/index'
import HomeHeroSlider from './HomeHeroSlider/HomeHeroSlider'
import HomeHeroSub from './HomeHeroSub/HomeHeroSub'
import Banner from '../Banner/Banner'
import './HomeHero.less'
class HomeHero extends Component {
    state={
        banner:null
    }
    async getBanner(){
        const response=await reqBanner()
        this.setState({banner:response.data.banner})
    }
    componentDidMount() {
        this.props.reqSlider()
        this.props.reqSub()
        this.getBanner()
    }
    shouldComponentUpdate(nextProps,nextState){
        if(nextProps=== this.props&&nextState===this.state){
          return false
        }else{
            return true
        }
    }
    render() {
        const {slider}=this.props.slider
        const {sub}=this.props
        const {banner}=this.state
        return (
        <div className='home-hero-container container clearFix'>
            <div className='home-hero'>
                <HomeHeroSlider slider={slider}/>
                <HomeHeroSub sub={sub}/>
                {banner?<Banner banner={banner}/>:null}
            </div>
        </div>
        )
  }
}
export default connect(
    state=>({slider:state.slider,sub:state.sub}),
    {reqSlider,reqSub}
)(HomeHero)