import {combineReducers} from 'redux'
import {
    RECIEVE_NAVLIST,
    RECIEVE_HOTWORD, 
    RECIEVE_KEYWORD,
    RECIEVE_CATEGORY,
    RECIEVE_SLIDER,
    RECIEVE_SUB,
    RECIEVE_MAIN,
    RECIEVE_FOOTER,
    LOGIN,
    ERROR_MSG,
    LOGOUT
    } from './ation-types'
const initNavList={navlist:[
    {"nav-item":"",
        child:[]
    }
]}
function navlist(state=initNavList,action){
    switch (action.type) {
        case RECIEVE_NAVLIST:           
            return action.data
        default:
            return state;
    }
}
const initHotWord={hotword:[
    {
        href:"",
        text:""
    }]
}
function hotword(state=initHotWord,action){
    switch (action.type) {
        case RECIEVE_HOTWORD:
            return action.data
        default:
            return state;
    }
}
const initKeyWord={
    keyword:[
        {
            href:"",
            text:"",
            result:""
        }
    ]
}
function keyword(state=initKeyWord,action){
    switch (action.type) {
        case RECIEVE_KEYWORD:            
            return action.data    
        default:
            return state
    }
}
const initCategory={"categorylist":[
    {
        "category-item":"",
        href:"",
        childItem:
            [
                {
                    href:"",
                    pic:"",
                    text:""
                }
            ]
        }
    ]
}
function category(state=initCategory,action){
    switch (action.type) {
        case RECIEVE_CATEGORY:
            return action.data   
        default:
            return state
    }
}
const initSlider={
    slider:[{
        href:'',
        pic:''}
]}
function slider(state=initSlider,action){
    switch (action.type) {
        case RECIEVE_SLIDER:           
            return action.data;    
        default:
            return state;
    }
}
const initSub={
    channel:[],
    promo:[]
}
function sub(state=initSub,action){
    switch (action.type) {
        case RECIEVE_SUB:
            return action.data;    
        default:
            return state;
    }
}
const initMain={
    brick:null,
    banner:null,
    recommend:null,
    comment:null,
    content:null,
    video:null
}
function main(state=initMain,action){
    switch (action.type) {
        case RECIEVE_MAIN:
            return action.data;    
        default:
            return state;
    }
}
const initFooter={
    service:null,
    links:null
}
function footer(state=initFooter,action){
    switch (action.type) {
        case RECIEVE_FOOTER:
            return action.data;
    
        default:
            return state
    }
}
const initLogin={
    
}
function log(state=initLogin,action) {
    switch (action.type) {
        case LOGIN:            
            return {type:'log',...action.data} 
        case LOGOUT:
            return {type:'success',initLogin} 
        case ERROR_MSG:
            return {type:'fail',msg:action.data  } 
        default:
            return state
    }
    
}
export default combineReducers(
    {navlist,hotword,keyword,category,slider,sub,main,footer,log}
    )