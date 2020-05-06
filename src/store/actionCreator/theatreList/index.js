import theatrelistTtype from '../../actionType/theatreList'
import axios from 'axios'
export function changeTheatreList(playload){
    return {
        type:theatrelistTtype.GET_THEATRE_LIST,
        playload
    }
}
export default{
    getTheatreList(){
        return async (dispatch)=>{
            const {data} = await axios.get('/theatre/index/getTheatreList',{
                params:{
                    page:1
                }
            })
            if(data){
                this.state.isLoading = false
            }
            // console.log(data.theatre_list)
            dispatch(changeTheatreList(data.theatre_list))
        }
    }
}