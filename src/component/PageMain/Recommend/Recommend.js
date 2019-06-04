import React, { Component } from 'react'
import RecommendHead from '../RecommendHead/RecommendHead'
import RecommendBody from '../RecommendBody/RecommendBody';
export default class Recommend extends Component {
    

    prev=()=>{
         this.child.current.prev()
         
        console.log(this.child)
    }
    next=()=>{
        this.child.current.next()
        console.log(this.child)
    }
    onRef=(ref)=>{
        this.child=ref
    }
    render() {
        const {head,body}=this.props.recommend
        const page=body.length
        //console.log(page)
        return (
            <div className='recommend'>
                <RecommendHead head={head} page={page} 
                    prev={this.prev}
                    next={this.next}
                />
                <RecommendBody onRef={this.onRef} body={body}/>
            </div>
        )
    }
}
