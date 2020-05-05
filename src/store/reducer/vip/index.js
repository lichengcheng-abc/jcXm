import vipInit from '../../state/vip'
export default function(state=vipInit,{type,list,goods}){
    state = JSON.parse(JSON.stringify(state))
    if(type === 'GET_VIP_LIST'){
        if(list){
            state.vipList = list
        }
        if(goods){
            state.goods = goods
        }
    }
    return state
}