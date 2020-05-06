import theaterDetailType from '../../actionType/theaterDetail'
import axios from 'axios'
export function getTheaterDetail(playload){
    // console.log(playload)
    return {
        type:theaterDetailType.GET_LIST_DETAIL,
        playload,
    }
}
export function getListDetail(payload){
    return {
        type:theaterDetailType.GET_LIST_DETAIL,
        payload,
    }
}
export default {
    listMore(id){
        return async (dispatch)=>{
            const pageNo=1
            const {data} = await axios.get('/theatre/index/getTheatreInfo',{
                params:{
                    theatre_id:id,
                    pageNo
                }
            })
            
            dispatch(getTheaterDetail(data))
            // console.log(data)
        }
    },
    getlist(list_id){
        return async (dispatch)=>{
            const {data} = await axios.get('/Show/Search/getShowList',{
                params:{
                    venue_id:list_id,
                }
            })
            if(data){
                this.state.isLoading = false
            }
            // console.log(data.list,111111)
            dispatch(getListDetail(data.list))
        }
    }
}
// https://api.juooo.com/theatre/index/getTheatreInfo?theatre_id=2
// https://api.juooo.com/Show/Search/getShowList?page=1&venue_id=2532