import axios from 'axios';
import ticketType from '../../actionType/ticketDetail';
//生成action来更新数据的
export function upTicket(payload){
    // console.log(payload,99)
    return {
        type:ticketType.UP_TICKET,
        payload
    }
}
export function upRecomm(payload){
    return {
        type:ticketType.UP_RECOMM,
        payload
    }
}

export default {
    getTicketDetail(schedular_id){
        console.log('8',schedular_id)
        return async (dispatch)=>{
            //发送请求  得到数据
            const {data} = await axios.get('/Schedule/Schedule/getScheduleInfo',{
                params:{
                    schedular_id
                }
            })
            if(data){
                this.state.isLoading = false
            }
            dispatch(upTicket(data))
        }
    },

    getRecomm(cate,cityId){
        console.log(cate,cityId)
        return async (dispatch)=>{
            //发送请求  得到数据
            const {data} = await axios.get('/Show/Search/getShowList',{
                params:{
                    category:cate,
                    city_id:cityId,
                }
            })
            dispatch(upRecomm(data.list))
        }
    }
}