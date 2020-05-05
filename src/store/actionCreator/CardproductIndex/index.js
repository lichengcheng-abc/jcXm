import cartType from '../../actionType/CardproductIndex'
import axios from 'axios'
export function getGroupList(playload){
    return {
        type:cartType.GET_CART_LIST,
        playload
    }
}
export function getVipList(vipList){
    return {
        type:cartType.GET_CART_LIST,
        vipList
    }
}
export function getBannerList(hotBanner){
    return {
        type:cartType.GET_CART_LIST,
        hotBanner
    }
}
export default {
    getCartList(){
        return async (dispatch)=>{
            const {data} = await axios.get('/Card/index/getCardGroupList')
            dispatch(getGroupList(data))
        }
    },
    getVipRuleList(){
        return async (dispatch)=>{
            const {data} = await axios.get('/vip/index/getVipRule')
            dispatch(getVipList(data.vip_rule_data.equity_list))
        }
    },
    getHotBannerList(){
        return async (dispatch)=>{
            const {data} = await axios.get('/Card/index/hotBanner')
            if(data.length>0){
                this.state.isloading = false
            } 
            dispatch(getBannerList(data))
            
        }
    },
}

    

// https://api.juooo.com/Card/index/getCardGroupList    储值卡 次卡
// https://api.juooo.com/Card/index/hotBanner banner广告图
// https://api.juooo.com/vip/index/getVipRule 优先购票