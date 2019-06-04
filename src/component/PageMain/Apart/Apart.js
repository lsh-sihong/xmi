import React, { Component } from 'react'
import BrickHead from '../BrickHead/BrickHead';
import BrickBody from '../BrickBody/BrickBody';

export default class PhoneApart extends Component {
    
    state={
        select:0
    }
    getSelect=(index)=>{
        this.setState({
            select:index
        })
    }
    render() {
        const {head,body,id}=this.props.brick
        const {select}=this.state
        return (
            <div  className='brick-box clearFix'>
                <BrickHead 
                    id={id} 
                    select={select} 
                    getSelect={this.getSelect} 
                    head={head}/>
                <BrickBody 
                    id={id} 
                    select={select} 
                    body={body}/>
            </div>
        )
    }
}
