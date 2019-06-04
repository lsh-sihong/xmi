import React, { Component } from 'react'
import {connect} from 'react-redux'
import {reqHotWords,reqKeyWords} from '../../../redux/actions'
import HotWord from '../HotWord/HotWord'
import KeyWordList from '../KeyWordList/KeyWordList'
 class SearchBox extends Component {
     state={
         isFocus:false
     }
     componentDidMount() {
       this.props.reqHotWords()
       this.props.reqKeyWords()
       
     }
     showKeyword=(type)=>{
        this.setState({
            isFocus:type
        })
     }
    render() {
        const {hotword}=this.props.hotword
        const {keyword}=this.props.keyword
        const {isFocus}=this.state
        const showKeyWord=isFocus?'block':'none'
        const hideHotWord=!isFocus?'block':'none'
        const searchBorder=isFocus?'#ff7600':'#e0e0e0'
        return (
            <form className='search-form clearFix' action='//search.mi.com/search'>
                <label htmlFor="search" className="hide">站内搜索</label>
                <input type='search' className='search-text' 
                    onFocus={()=>this.showKeyword(true)} 
                    onBlur={()=>this.showKeyword(false)}
                    style={{borderColor:searchBorder}}
                />
                <button type="submit" className='search-submit'
                    style={{borderColor:searchBorder}}
                >
                    <i  className="iconfont icon-chaxun"></i>
                </button>
                <div className='search-hot-word'
                    style={{borderColor:searchBorder,display:hideHotWord}}
                >
                    {
                        <HotWord hotword={hotword}/>
                    }
                </div>
                <div className='keyword-list' style={{display:showKeyWord}} >
                    {
                        <KeyWordList keyword={keyword}/>
                    }
                </div>
            </form>
        )
    }
}
export default connect(
    state=>({hotword:state.hotword,keyword:state.keyword}),
    {reqHotWords,reqKeyWords}
)(SearchBox)