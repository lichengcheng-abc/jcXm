import groupInit from '../../state/group';
export default function(state=groupInit,{type,payload}){
    state = JSON.parse(JSON.stringify(state));
    if(type === 'UP_GROUP'){
        state.groupList = payload
    }
    return state
}