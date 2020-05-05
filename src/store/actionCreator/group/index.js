import axios from 'axios';
import groupType from '../../actionType/group';
//生成action的
export function upGroup(payload){
    return {
        type:groupType.UP_GROUP,
        payload
    }
}

export default {
    getGroupList(){
        return async function(dispatch){
            const {data} = await axios.get('/Activity/Groupbuying/getList?page=1')
            dispatch(upGroup(data.list))
        }
    }
}