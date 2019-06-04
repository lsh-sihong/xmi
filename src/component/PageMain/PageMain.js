import React, { Component } from 'react'
import {connect} from 'react-redux'
import {reqMain} from '../../redux/actions' 
import Banner from '../Banner/Banner'
import Apart from './Apart/Apart'
import Recommend from './Recommend/Recommend';
import Comment from './Comment/Comment';
import Content from './Content/Content'
import './PageMain.less'
import Video from './Video/Video';
class PageMain extends Component {
    state={
        bricks:null
    }
    componentDidMount() {
        this.props.reqMain()
    }
    componentWillReceiveProps(nextProps){
        const {brick,banner}=nextProps.main
        const arr=this.combine(brick,banner)
        this.setState({
            bricks:arr
        })
    }
    //把请求的数据合并成一个数组
    combine=(brick,banner)=>{
        var arr=[]
        for(var i=0;i<6;i++){
            arr[i*2]=brick[i]
            if(banner[i]){
                arr[i*2+1]=banner[i]
            }
        }
        return arr
    }
    render() {
        const {bricks}=this.state
        const {recommend,comment,content,video}=this.props.main
        if(bricks){
            return (
            <div className='page-main'>
                <div className='container clearFix'>
                    {
                        bricks.map((brick,index)=>{
                            if(brick.head){
                                return <Apart brick={brick} key={index}/>
                                
                            }else{
                                return <Banner banner={brick} key={index}/>
                            }
                        })
                    }
                    <Recommend recommend={recommend}/>
                    <Comment comment={comment}/>
                    <Content content={content}/>
                    <Video video={video}/>
                </div>

            </div>
            )
        }else{
            return null
        }
        
    }
}
export default connect(
    state=>({main:state.main}),
    {reqMain}
)(PageMain)