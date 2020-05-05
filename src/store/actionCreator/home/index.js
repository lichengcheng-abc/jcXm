import axios from 'axios' 
import homeActionType from '../../actionType/home/index'
export function getSlide_list(payload) {
   
   return {
        type:homeActionType.UP_SLIDE,
        payload
   }
}

export function getClassify_list(payload) {
   
    return {
         type:homeActionType.UP_ClASSIFY,
         payload
    }
 }

 export function getVipIndex(payload) {
   
    return {
         type:homeActionType.UP_VIPINDEX,
         payload
    }
 }

 export function getHosts(payload) {
   
    return {
         type:homeActionType.UP_HOTS,
         payload
    }
 }

 export function upWtlist(payload) {
   
    return {
         type:homeActionType.UP_WTLIST,
         payload
    }
 }


export default {
    upSlide(){
      
        return async function (dispatch) {
            const {data} = await axios.get('/home/index/getClassifyHome?city_id=0&abbreviation=&version=6.1.1&referer=2')
            // console.log( data.slide_list )
            // console.log(data.classify_list)
            // 我的轮播图和分类是一个接口的
            dispatch(getSlide_list(data.slide_list))
            dispatch(getClassify_list(data.classify_list))
            


        }
     
    },

    upVipIndex(){
      
        return async function (dispatch) {
            const {data} = await axios.get('/vip/index/getVipHomeSchedular?city_id=0&version=6.1.1&referer=2')
            // console.log( data.allList )
            
            dispatch(getVipIndex(data.allList))
         


        }
     
    },

    upHosts(){
      
        return async function (dispatch) {
            const {data} = await axios.get('/home/index/getHotsRecommendList?city_id=0&version=6.1.1&referer=2')
           
            // console.log(data.hots_show_list)
            dispatch(getHosts(data.hots_show_list))
         


        }
     
    },

    upWtlist(){
    //   console.log( this )
        return async (dispatch)=> {

            const {data} = await axios.get('/home/index/getFloorShow?city_id=0&version=6.1.1&referer=2')
           
            // console.log(data[2].list)
            if(data[2].list.length>0){
               this.state.isLoading = false
            }
            dispatch( upWtlist(data[2].list))

         


        }
     
    },

    


}
