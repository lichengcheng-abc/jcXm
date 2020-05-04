import plusInit from '../../state/CardproductIndex'
export default function(state=plusInit,{type,playload,vipList,hotBanner}){
    state = JSON.parse(JSON.stringify(state))
    if(type === 'GET_CART_LIST'){
        if(playload){
           state.group = playload 
           if(playload.once_card){
               state.gropOnce = playload.once_card
           }
           if(playload.cate_card){
               state.groupCity = playload.cate_card
           }
           if(playload.store_card){
               state.storeCard = playload.store_card
           }
        }
        if(vipList){
            state.vipRule = vipList
        }
        if(hotBanner){
            state.banner = hotBanner
        }
        
        
    }
    return state
}