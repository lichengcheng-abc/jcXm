import axios from 'axios';
import touringType from '../../actionType/touring';
//生成action的
export function upTouring(payload){
    console.log(payload,88)
    return {
        type:touringType.UP_TOURING,
        payload
    }
}
export default {
    getTouring(){
        return async (dispatch)=>{
            console.log(this)
            const {data} = await axios.get('/show/tour/getList')
            if(data){
                this.state.isLoading = false
            }
            dispatch(upTouring(data.list))
        }
    }
}