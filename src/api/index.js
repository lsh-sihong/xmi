import axios from 'axios'
function ajax(url,data={},type='GET'){
    if(type==='GET'){
        let paramstr=''
        Object.keys(data).forEach(key=>{
            paramstr+=key+'='+data[key]+'&'
        })
        if(paramstr){
            paramstr=paramstr.substring(0,paramstr.length-1)
        }
        return axios.get(url+'?'+paramstr)
    }else{
        return axios.post(url,data)
    }
}
export const reqNavList=()=>ajax('navlist.json')
export const reqHotWordList=()=>ajax('search_hot_word.json')
export const reqKeyWordList=()=>ajax('search_key_word.json')
export const reqCategoryList=()=>ajax('categorylist.json')
export const reqSliderList=()=>ajax('slider.json')
export const reqSubList=()=>ajax('sub.json')
export const reqBanner=()=>ajax('banner.json')
export const reqMainList=()=>ajax('pagemain.json')
export const reqFooters=()=>ajax('footer.json')
export const login=()=>ajax('https://www.easy-mock.com/mock/5cee8f4765dd5c3a44db25b4/example/login',{},'POST')