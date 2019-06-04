import React, { Component } from 'react'
import ChannelList from '../ChannelList/ChannelList'
import PromoList from '../PromoList/PromoList'
export default class HomeHeroSub extends Component {
    render() {
        const {channel,promo}=this.props.sub
        if((channel.length!==0)&&(promo.length!==0)){
            return (
                <div className='home-hero-sub clearFix'>
                    <ChannelList channellist={channel}/>
                    <PromoList promolist={promo} />
                </div>
        )}else{
            return null
        }
    }
}
