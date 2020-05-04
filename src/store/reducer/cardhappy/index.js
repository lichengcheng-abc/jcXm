import cardhappyInit from '../../state/cardhappy';
export default function(state=cardhappyInit,{type,payload}){
    state = JSON.parse(JSON.stringify(state));
    if(type === 'UP_CARDHAPPY'){
        state.cardhappyList = payload
    }
    return state
}