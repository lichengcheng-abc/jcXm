import axios from 'axios';
import cardhappyType from '../../actionType/cardhappy';
//生成action
export function upCardhappy(payload){
    console.log('p',payload);
    return {
        type:cardhappyType.UP_CARDHAPPY,
        payload
    }
}
export default {
    getCardList(){
        return async (dispatch)=>{
            const {data} = await axios.get('/Card/index/getCardExchangeList?group_id=228')
            dispatch(upCardhappy(data.data))
        }
    }
}