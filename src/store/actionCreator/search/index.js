import axios from 'axios' 
import searchActionType from '../../actionType/search/index'

export function getSearchList(payload,pageNo) {
   
    return {
         type:searchActionType.UP_SEARCH_LIST,
         payload,
         pageNo
    }
 }

 export default {
    upSearchList(val){
      
        return async  (dispatch)=> {
            // console.log(val)
            // console.log(this)

        
    //  console.log(val, this.state.pageNo )
            const data = await 
axios.get(`/Show/Search/getShowList?city_id=&category=&keywords=${val}_id=&start_time=&page=${this.state.pageNo}&referer_type=&version=6.1.1&referer=2`)
            
            //  console.log( data.data.list )
            dispatch(getSearchList( data.data.list,this.state.pageNo))
            // console.log( data.data.list )

          
            let waterfallLeft = []; //左边瀑布流盒子
            let waterfallRight = []; //右边瀑布流盒子
        
            this.props.searchList.forEach((v, i) => {
               
              if (i % 2 === 0) {
                waterfallLeft.push(v);
              } else {
                waterfallRight.push(v);
              }
            });

           
            this.setState(
              {
                waterfallLeft,
                waterfallRight,
              },
              () => {
                this.switch = true;
              //   请求结束可以请求下次的数据了
              }
            );
       
        }
     
    },
   

 }


