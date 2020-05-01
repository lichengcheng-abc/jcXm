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



export default {
    upSlide(){
      
        return async function (dispatch) {
            const {data} = await axios.get('/home/index/getClassifyHome?city_id=0&abbreviation=&version=6.1.1&referer=2')
            // console.log( data.slide_list )
            // console.log(data.classify_list)
            dispatch(getSlide_list(data.slide_list))
            dispatch(getClassify_list(data.classify_list))
            


        }
     
    },

    


}