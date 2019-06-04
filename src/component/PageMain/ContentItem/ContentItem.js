import React, { Component } from 'react'
import { Carousel } from 'antd';

export default class ContentItem extends Component {
    state={
        current:0
    }
    componentDidMount() {
        this.page=this.props.carseoul.length
    }
    
    ref=React.createRef()
    prev=()=>{
        if(this.state.current>0){
            this.ref.current.prev()
            this.setState({
                current:this.state.current-1
            })

        }
    }
    next=()=>{
        if(this.state.current<this.page-1){
            this.ref.current.next()
            this.setState({
                current:this.state.current+1
            })
        }
    }
    setCurrent=(current)=>{
        this.setState({
            current
        })
    }
    render() {
        const {title,carseoul,theme}=this.props
        const setting={
            afterChange:current=>this.setCurrent(current)   
        }
        return (
            <div className='content-item'
                style={{borderTopColor:theme,borderTopWidth:1,borderTopStyle:'solid'}}
            >
                <h2 className="title"
                    style={{color:theme}}
                >
                    {title}
                </h2>
                <div className='carseoul'>
                    <Carousel ref={this.ref} {...setting}>
                        {
                            carseoul.map((item,index)=>{
                                const {desc,href,pic,price,text,more}=item
                                if(more){
                                    return(
                                        <div key={index} 
                                            className='go-more'>
                                            <p className='desc'>
                                                {desc}
                                            </p>
                                            <a className='btn-more' href={href}
                                                style={{
                                                    borderColor:theme,
                                                    borderWidth:1,
                                                    borderStyle:'solid',
                                                    color:theme
                                                }}
                                            >{text}</a>
                                            <img 
                                                className='thumb'
                                                src={pic} alt='text'/>
                                        </div>
                                    )
                                }else{
                                    return(
                                        <div key={index}
                                            className='carseoul-item'>
                                                <h4 className='name'>
                                                    <a target="_blank" 
                                                        rel="noopener noreferrer"
                                                        href={href}>{text}</a>
                                                </h4>
                                                <p className='desc'>
                                                    <a target="_blank" 
                                                        rel="noopener noreferrer"
                                                        href={href}>{desc}</a>
                                                </p>
                                                <p className='price'>
                                                <a target="_blank" 
                                                    rel="noopener noreferrer"
                                                    href={href}>{price}</a>
                                                </p>
                                                <div className='figure'>
                                                    <a href={href}>
                                                        <img src={pic}/>
                                                    </a>
                                                </div>
                                        </div>
                                    )
                                }
                            })
                        }
                    </Carousel>
                </div>
                <a href='javascript:void(0);' className='prev button' onClick={this.prev}>上一张</a>
                <a href='javascript:void(0);' className='next button' onClick={this.next}>下一张</a>
            </div>
        )
    }
}
