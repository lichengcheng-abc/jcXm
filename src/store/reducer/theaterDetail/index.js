import theaterDtailInit from '../../state/theaterDetail'
export default function(state=theaterDtailInit,{type,playload,payload}){
    state = JSON.parse(JSON.stringify(state))
        // console.log(playload.theatre_detail)
        if(type === 'GET_LIST_DETAI'){
            console.log(payload)
            
            if(playload){            
                state.list = playload
                // console.log(playload.theatre_detail)
            }
            if(payload){
                state.result = payload
            }
            console.log(state)
                
        }
   
    return state
}