import touringInit from '../../state/touring';
export default function(state=touringInit,{type,payload}){
    state = JSON.parse(JSON.stringify(state));
    if(type === 'UP_TOURING'){
        state.touringList = payload
    }
    return state
}