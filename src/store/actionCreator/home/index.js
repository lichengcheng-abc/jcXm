import axios from 'axios' 
import homeActionType from '../../actionType/home/index'
export function getSlide_list(payload) {
   
   return {
        type:homeActionType.UP_SLIDE,
        payload
   }
}

export function getClassify_list(payload) {
   
    return {
         type:homeActionType.UP_ClASSIFY,
         payload
    }
 }

 export function getVipIndex(payload) {
   
    return {
         type:homeActionType.UP_VIPINDEX,
         payload
    }
 }

 export function getHosts(payload) {
   
    return {
         type:homeActionType.UP_HOTS,
         payload
    }
 }

 export function upWtlist(payload) {
   
    return {
         type:homeActionType.UP_WTLIST,
         payload
    }
 }

 export function upShowList(payload) {

    //  console.log( payload)
   
    return {
         type:homeActionType.UP_SHOWLIST,
         payload
    }
 }


export default {
    upSlide(){
      
        return async function (dispatch) {
            const {data} = await axios.get('/home/index/getClassifyHome?city_id=0&abbreviation=&version=6.1.1&referer=2')
            // console.log( data.slide_list )
            // console.log(data.classify_list)
            // 我的轮播图和分类是一个接口的
            dispatch(getSlide_list(data.slide_list))
            dispatch(getClassify_list(data.classify_list))
            


        }
     
    },

    upVipIndex(){
      
        return async function (dispatch) {
            const {data} = await axios.get('/vip/index/getVipHomeSchedular?city_id=0&version=6.1.1&referer=2')
            // console.log( data.allList )
            
            dispatch(getVipIndex(data.allList))
         


        }
     
    },

    upHosts(){
      
        return async function (dispatch) {
            const {data} = await axios.get('/home/index/getHotsRecommendList?city_id=0&version=6.1.1&referer=2')
           
            // console.log(data.hots_show_list)
            dispatch(getHosts(data.hots_show_list))
         


        }
     
    },

    upWtlist(){
    //   console.log( this )
        return async (dispatch)=> {

            const {data} = await axios.get('/home/index/getFloorShow?city_id=0&version=6.1.1&referer=2')
           
            // console.log(data[2].list)
            if(data[2].list.length>0){
               this.state.isLoading = false
            }
            dispatch( upWtlist(data[2].list))

         


        }
     
    },

    upShowList(){
        //   console.log( this )
            return async (dispatch)=> {
            // console.log(this.props.pageIndex)
                const data = await axios.get(
                    `/Show/Search/getShowList?city_id=0&category=&keywords=&venue_id=&start_time=&page=${this.props.pageIndex}&referer_type=index&version=6.1.1&referer=2`
                  );
                  dispatch(upShowList( data.data.list))
                //   console.log(data.data.list);
                 
                  let waterfallLeft = []; //左边瀑布流盒子
                  let waterfallRight = []; //右边瀑布流盒子
                  this.props.showList.forEach((v, i) => {
                    if (i % 2 === 0) {
                      waterfallLeft.push(v);
                    } else {
                      waterfallRight.push(v);
                    }
                  });
                  // console.log(waterfallLeft,waterfallRight)
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