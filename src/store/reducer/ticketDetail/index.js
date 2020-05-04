import ticketInit from '../../state/ticketDetail';
export default function(state=ticketInit,{type,payload}){
    state = JSON.parse(JSON.stringify(state));
    if(type === 'UP_TICKET'){
        console.log(44444444,payload);
        state.static_data = payload.static_data;
        state.city = payload.static_data.city;
        state.venue = payload.static_data.venue;
        state.time = payload.static_data.show_time_data;
        state.show_desc = payload.static_data.show_desc;
        state.cate_id = payload.static_data.cate_parent_id;
    }
    // console.log(state,777)
    return state
}