import React, { Component } from 'react'

export default class BrickItem extends Component {
    state={
        showReview:false
    }
    showReview=()=>{
        this.setState({
            showReview:!this.state.showReview
        })
    }
    render() {
        const {size,isphone,icon,desc,flag,href,pic,price,text,oldprice,rank,review}=this.props
        const isNew=flag&&flag==='新品'?'new':'disc'
        const showReview=this.state.showReview?'active':''
        
        if(size==='item-m'){
            return (
                <li 
                    className={`${size} ${isphone} brick-item f_left span4`}
                    onMouseEnter={this.showReview}
                    onMouseLeave={this.showReview}
                    >
                    <div className='figure'>
                        <a className=''
                            href={href}
                            >
                            {pic?<img src={pic} alt={text}/>:<i className={`iconfont ${icon}`}></i>}
                        </a>
                    </div>
                    <h3 className='title'>
                        <a href={href}>{text}</a>
                    </h3>
                    {!rank||desc?<p className='desc'>{desc}</p>:null}
                    {price?< p className='price'>
                        <span className='num'>{price}元 </span>
                        {oldprice?<del className='num'>{oldprice}元</del>:null}
                        </p>:null}
                    {flag?<div className={`flag ${isNew}`}>{flag}</div>:null}
                    {!desc||rank?<p className='rank'>{rank}</p>:null}
                    {review&&review.review?<div className={`review-wrap ${showReview}`}>
                        <a href={href}>
                            <span className='review'>{review.review}</span>
                            <span className='author'>{review.author}</span>
                        </a>
                        </div>:null}
    
                </li>
            )
        }else{
            const isMore=text==='浏览更多'?'more':""
            return (
                <li 
                    className={`${size} ${isphone} brick-item f_left span4`}
                    onMouseEnter={this.showReview}
                    onMouseLeave={this.showReview}
                    >
                    <div className='figure'>
                        <a 
                            href={href}
                            >
                            {pic?<img src={pic} alt={text}/>:<i className={`iconfont ${icon}`}></i>}
                        </a>
                    </div>
                    <h3 className={`title ${isMore}`}>
                        <a href={href}>{text}</a>
                    </h3>
                    {!price||desc?<p className='desc'>{desc}</p>:null}
                    {!desc||price?< p className='price'>
                            <span className='num'>{price}元 </span>
                            </p>:null}

    
                </li>
            )
        }
    }
}
