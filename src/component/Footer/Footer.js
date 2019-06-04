import React, { Component } from 'react'
import {reqFooter} from '../../redux/actions'
import {connect} from 'react-redux'
import FootLink from "./FootLink/FootLink";
import {Row} from 'antd'
import './Footer.less'
class Footer extends Component {
    componentDidMount() {
        this.props.reqFooter()
    }
    
    render() {
        const {service,links}=this.props.footer
        if(service&&links){
            const colContact=links['col-contact']
            const colLink=links['col-link']
            const {phone,time,contact}=colContact
            return (
                <div className='site-footer'>
                    <div className='container'>
                        <div className='service'>
                            <ul className='clearFix'>
                                {
                                    service.map((svr,index)=>{
                                        const {href,text,icon}=svr
                                        return(
                                            <li className='f_left' key={index}>
                                                <a href={href}>
                                                    <i className={`iconfont ${icon}`}></i>
                                                    {text}
                                                </a>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <div className='links clearFix'>
                            <div className='col-link f_left'>
                                <Row >
                                    {
                                        colLink.map(link=>(
                                            <FootLink {...link}/>
                                        ))
                                    }

                                </Row>
                            </div>
                            <div className='col-contact f_right'>
                                    <p className='phone'>{phone}</p>
                                    <p className='time'>
                                    <div dangerouslySetInnerHTML={{__html: time}}/>
                                    </p>
                                    <a href={contact.href}>
                                        <i className={`iconfont ${contact.icon}`}></i>
                                        {contact.text}
                                    </a>
                            </div>
                        </div>
                    </div>
                </div>
            )

        }else{
            return null
        }
    }
}
export default connect(
    state=>({footer:state.footer}),
    {reqFooter}
)(Footer)