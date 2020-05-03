import axios from 'axios';
import ticketType from '../../actionType/ticketDetail';
//生成action来更新数据的
export function upTicket(payload){
    console.log(payload,99)
    return {
        type:ticketType.UP_TICKET,
        payload
    }
}

export default {
    getTicketDetail(){
        return async (dispatch)=>{
            // const schedular_id = this.props.location.query.schedular_id
            //发送求情  得到数据
            const {data} = await axios.get('/Schedule/Schedule/getScheduleInfo',{
                params:{
                    schedular_id:111609
                }
            })
            console.log('1111111',data)
            dispatch(upTicket(data))
        }
    }
}