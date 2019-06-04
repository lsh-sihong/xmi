import React, { Component } from 'react'

export default class RecommendHead  extends Component {
    state={
        recommendPage:0
    }
    prev=()=>{
        if(this.state.recommendPage>0){
            this.props.prev()
            this.setState({
                recommendPage:this.state.recommendPage-1
            })
        }
        

    }
    next=()=>{
        if(this.state.recommendPage<this.page-1){
            this.props.next()
            this.setState({
                recommendPage:this.state.recommendPage+1
            })
        }
    }
    componentWillMount() {
      this.page=this.props.page/5  
    }
    
    render() {
        const {head}=this.props
        const {recommendPage}=this.state
        const {title,moreIcon}=head
        return (
            <div className='head clearFix'>
            <h2 className='title'>{title}</h2>
            
            {
                moreIcon?
                <div className='more'>
                    <a href='javascript:void(0)'
                        onClick={this.prev}
                        className={recommendPage===0?'disabled':''}
                    ><i className={`iconfont ${moreIcon[0]}`}></i></a>
                    <a href='javascript:void(0)'
                        onClick={this.next}
                        className={recommendPage===(this.page-1)?'disabled':''}
                    ><i className={`iconfont ${moreIcon[1]}`}></i></a>
                </div>:
                null
            }
        </div>
        )
    }
}
