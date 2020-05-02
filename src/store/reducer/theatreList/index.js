import theatreInit from '../../state/theatreList'
export default function(state=theatreInit,{type,playload}){
    state = JSON.parse(JSON.stringify(state))
    if(type === "GET_THEATRE_LIST"){
        state.theatreList = playload
        console.log(state.theatreList)
    }
    // console.log(state)
    return state
}