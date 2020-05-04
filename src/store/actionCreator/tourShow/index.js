import axios from 'axios';
import tourShowType from '../../actionType/tourShow';

//生成action的
export function upTourShow(payload){
    // console.log(payload,99)
    return {
        type:tourShowType.UP_TOUR_SHOW,
        payload
    }
}
export default {
    getTourShowList(){
        return async function(dispatch){
            const {data} = await axios.get('/show/tour/getInfo',{
                params:{
                    id:2
                }
            })
            // console.log(111,data)
            dispatch(upTourShow(data))
        }
    }
}