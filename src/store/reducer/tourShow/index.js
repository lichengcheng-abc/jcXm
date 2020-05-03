import tourShowInit from '../../state/tourShow';
export default function(state=tourShowInit,{type,payload}){
    state = JSON.parse(JSON.stringify(state));
    if(type === 'UP_TOUR_SHOW'){
        console.log(44444444,payload);
        state.name = payload.name;
        state.city_num = payload.city_num;
        state.show_num = payload.show_num;
        state.start_time = payload.start_time;
        state.end_time = payload.end_time;
        state.tourShowList = payload.list;
    }
    console.log(state,71)
    return state
}