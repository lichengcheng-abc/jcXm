import ticketInit from '../../state/ticketDetail';
export default function(state=ticketInit,{type,payload}){
    state = JSON.parse(JSON.stringify(state));
    if(type === 'UP_TICKET'){
        console.log(44444444,payload);
        state.static_data = payload.static_data;
    }
    return state
}