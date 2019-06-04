import React, { Component ,Fragment} from 'react'
import {Row,Col} from 'antd'
export default class Detail extends Component {

  render() {
    const {child}=this.props
    if(child){
        return (
          <div 
            className="item-children" >
            <div className='container' >
              <Row className='detail' gutter={16}>
                {
                  child.map(detail=>{
                    const {flag,href,pic,price,text}=detail
                    return(
                      <Col span={4} key={href}>
                      {
                          <Fragment>
                              <div className='figure'>
                                  
                                  <a href={href}>
                                      <img src={pic} alt={text}></img>
                                  </a>
                              </div>  
                              <div className='title'>
                                  <a href={href}>{text}</a>
                              </div> 
                              <p className='price'>{price}</p> 
                              {flag?<div className='flags'><p className='flag'>{flag}</p></div>:null}
                          </Fragment>                                                   
                      }
                      </Col>
                    )
                  })
              }
              </Row>                                    
            </div>
          </div>
        
        )
      
    }else{
      return null
    }
  }
}
