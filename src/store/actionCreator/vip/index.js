// https://api.juooo.com/vip/index/getVipRule 优先购买
// https://api.juooo.com/vip/index/getDiscountList?page=2&limit=10 专享折扣
import vipType from '../../actionType/vip'
import axios from 'axios'
export function getVipList(list){
    return {
        type:vipType.GET_VIP_LIST,
        list
    }
}
export function getVipGoods(goods){
    return {
        type:vipType.GET_VIP_LIST,
        goods
    }
}
export default {
    getVipListIndex(){
        return async (dispatch)=>{
            
            const {data} = await axios.get('/vip/index/getVipRule')
            // console.log(data.vip_rule_data.equity_list)
            dispatch(getVipList(data.vip_rule_data.equity_list))
        }
    },
    getVipGoodsIndex(){
        return async (dispatch)=>{
            const {data} = await axios.get('/vip/index/getDiscountList',{
                params:{
                    page:1,
                    limit:10
                }
        })
        // console.log(data.list)
        if(data.list){
            this.state.isLoading = false
        }
        dispatch(getVipGoods(data.list))
        }
       
    }
}