import React, { Component } from 'react'
export default class TopBarNav extends Component {
    state={
        isShow:false,
    }
    showDownload=()=>{
        this.setState({
            isShow:!this.state.isShow
        })
        
    }

    render() {
        const isShow=this.state.isShow?"block":"none";
       
        return (
            <div className='topbar-nav f_left'>
                <a href='http://www.mi.com/index.html'>小米商城</a>
                <span className='sep'>|</span>
                <a href='https://www.miui.com/'>MIUI</a>
                <span className='sep'>|</span>
                <a href='https://iot.mi.com/index.html'>loT</a>
                <span className='sep'>|</span>
                <a href='https://i.mi.com/'>云服务</a>
                <span className='sep'>|</span>
                <a href='https://jr.mi.com?from=micom'>金融</a>
                <span className='sep'>|</span>
                <a href='https://youpin.mi.com/'>有品</a>
                <span className='sep'>|</span>
                <a href='https://xiaoai.mi.com/'>小爱开放平台</a>
                <span className='sep'>|</span>
                <a href='https://qiye.mi.com/'>企业团购</a>
                <span className='sep'>|</span>
                <a href='https://www.mi.com/aptitude/list/?id=41'>资质证照</a>
                <span className='sep'>|</span>
                <a href='https://www.mi.com/aptitude/list/'>协议规则</a>
                <span className='sep'>|</span>
                <a className='app-download' href='https://www.mi.com/appdownload/' onMouseEnter={this.showDownload} onMouseLeave={this.showDownload}>下载app
                    <span className='box' style={{display:isShow}} >
                        <em></em>
                        <img src="//i1.mifile.cn/f/i/17/appdownload/download.png?1" alt="小米商城"/>
                        <span >小米商城APP</span>
                    </span>
                </a>
                <span className='sep'>|</span>
                
                <a href='http://www.mi.com/index.html'>SelectRegion</a>
            </div>
        )
    }
}
