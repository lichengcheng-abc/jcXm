import axios from 'axios' 
import searchActionType from '../../actionType/search/index'

export function getSearchList(payload) {
   
    return {
         type:searchActionType.UP_SEARCH_LIST,
         payload
    }
 }

 export default {
    upSearchList(val){
      
        return async  (dispatch)=> {
            // console.log(val)
            // console.log(this)

            const data = await 
axios.get(`/Show/Search/getShowList?city_id=&category=&keywords=${val}_id=&start_time=&page=${this.props.pageNo}&referer_type=&version=6.1.1&referer=2`)
            
            //  console.log( data )


        }
     
    }

 }
