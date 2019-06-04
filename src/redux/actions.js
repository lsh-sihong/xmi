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
import {
    reqNavList,
    reqHotWordList,
    reqKeyWordList, 
    reqCategoryList,
    reqSliderList,
    reqSubList,
    reqMainList,
    reqFooters,
    login,
} from '../api/index'
//同步action
const recieveNavList=(navlist)=>({type:RECIEVE_NAVLIST,data:navlist})
const recieveHotWord=(hotword)=>({type:RECIEVE_HOTWORD,data:hotword})
const recieveKeyWord=(keyword)=>({type:RECIEVE_KEYWORD,data:keyword})
const recieveCategory=(category)=>({type:RECIEVE_CATEGORY,data:category})
const recieveSlider=(slider)=>({type:RECIEVE_SLIDER,data:slider})
const recieveSub=(sub)=>({type:RECIEVE_SUB,data:sub})
const recieveMain=(main)=>({type:RECIEVE_MAIN,data:main})
const recieveFooter=(footer)=>({type:RECIEVE_FOOTER,data:footer})
const recieveLogin=(login)=>({type:LOGIN,data:login})
const recieveErr=(msg)=>({type:ERROR_MSG,data:msg})
export const recieveLogout=(msg)=>({type:LOGOUT,data:msg})
//异步action
export const reqNavLists=()=>{
    return async dispatch=>{
        const response=await reqNavList()
        const navlist=response.data

         dispatch(recieveNavList(navlist))

    }
}
export const reqHotWords=()=>{
    return async dispatch=>{
        const response = await reqHotWordList()
        const hotword=response.data
        dispatch(recieveHotWord(hotword))
    }
}
export const reqKeyWords=()=>{
    return async dispatch=>{
        const response = await reqKeyWordList()
        const keyword = response.data
        dispatch(recieveKeyWord(keyword))

    }
}
export const reqCategory=()=>{
    return async dispatch=>{
        const response=await reqCategoryList()
        const category=response.data
        dispatch(recieveCategory(category))
    }
}
export const reqSlider=()=>{
    return async dispatch=>{
        const response=await reqSliderList()
        const slider=response.data
        dispatch(recieveSlider(slider))
    }
}
export const reqSub=()=>{
    return async dispatch=>{
        const response= await reqSubList()
        const sub=response.data
        dispatch(recieveSub(sub))
    }
}
export const reqMain=()=>{
    return async dispatch=>{
        const response=await reqMainList()
        const main=response.data
        dispatch(recieveMain(main))
    }
}
export const reqFooter=()=>{
    return async dispatch=>{
        const response=await reqFooters()
        const footer=response.data
        dispatch(recieveFooter(footer))
    }
}
export const reqLogin=(type,user)=>{
    if(type){
        const {username,password} = user;
        if(!username||!password){
            return recieveErr('用户名和密码必须填写')
        }
    }else{
        const {phone,code} = user;
        if(!phone||!code){
            return recieveErr('用户名和密码必须填写')
        }
    }
    return async dispatch=>{
        const response=await login()
        const loginMsg=response.data
        if(loginMsg.code==='200'){
            dispatch(recieveLogin(loginMsg.data))
        }else{
            dispatch(recieveErr('登陆失败'))
        }
    }
}