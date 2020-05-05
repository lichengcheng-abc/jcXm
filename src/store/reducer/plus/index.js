import plusInit from '../../state/plus'
export default function(state=plusInit,{type,header,list}){
    state = JSON.parse(JSON.stringify(state))
    if(type === 'GET_PLUS_LIST'){
        if(header){
            state.header = header
        }
        if(list){
            state.list = list
        }
    }
    // console.log(state)
    return state
}