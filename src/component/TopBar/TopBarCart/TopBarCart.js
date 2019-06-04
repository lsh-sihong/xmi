import React, { Component } from 'react'
export default class TopBarCart extends Component {

  render() {

    return (
      <div className='topbar-cart f_right'  >
        <a href='//static.mi.com/cart/'>
            <i className="iconfont icon-cart"></i>
            购物车
            <span className='cart-mini-num'>（0）</span>   
                   
        </a>
        <div className="cart-menu" id="J_miniCartMenu" >
            <div className="loading">
                购物车中还没有商品，赶紧选购吧
            </div>
        </div> 
      </div>
    )
  }
}
