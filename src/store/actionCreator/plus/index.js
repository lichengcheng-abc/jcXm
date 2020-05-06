// https://api.juooo.com/Card/Product/info头部信息
// https://api.juooo.com/vip/index/getVipRule 购票列表
import plusType from '../../actionType/plus'
import axios from 'axios'
export function getPlusHeader(header){
    // console.log(header)
    return {
        type:plusType.GET_PLUS_LIST,
        header
    }
}
export function getPlusList(list){
    return {
        type:plusType.GET_PLUS_LIST,
        list
    }
}
export default {
    getPlusHeaderIndex(){
        return async (dispatch)=>{
            const {data} = await axios.get('/Card/Product/info')
            // console.log(data.basic_info)
            dispatch(getPlusHeader(data.basic_info))
        }
    },
    getPlusListIndex(){
        return async (dispatch)=>{
            const {data} = await axios.get('/vip/index/getVipRule')
            // console.log(data.vip_rule_data.equity_list)
            if(data){
                this.state.isLoading = false
            }
            dispatch(getPlusList(data.vip_rule_data.equity_list))
        }
    }
}