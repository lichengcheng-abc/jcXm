import axios from "axios";
import libraryActionType from "../../actionType/library";

const librartType = (type, payload) => {
  return {
    type,
    payload,
  };
};

export function thelibrary_nav(payload){
  return{
    type:libraryActionType.GET_LIBRARY_NAV,
    payload
  }
}

export function thelibrary_map(payload) { 
  return{
    type:libraryActionType.GET_LIBRARY_MAP,
    payload
  }
 }

 export function thepageIndex(payload){
  return{
    type:libraryActionType.GET_PAGEINDEX,
    payload
  }
}

export function theshowList(payload){
  return{
    type:libraryActionType.GET_LIBRARYINIT,
    payload
  }
}

export default {
  // 导航
  getLibraryNav() {
    return async (dispatch) => {
      const {data} = await axios.get(
        "/Show/Index/getShowCategoryList?version=6.1.1&referer=2"
      );
        // console.log(11111111,data);
      dispatch(thelibrary_nav(data));
    };
  },
  //
  // 地图
  getLibraryMap() {
    return async (dispatch) => {
      const  {data}  = await axios.get(
        "/city/city/getCityList?version=6.1.1&referer=2"
      );
      dispatch(thelibrary_map(data.city_list));
    };
  },
  //   重置页数
  defaultPageIndex() {
    return (dispatch) => {
        console.log(777,this.pageIndex);
      dispatch(
        librartType(libraryActionType.GET_PAGEINDEX, {
          pageIndex: this.pageIndex,
        })
      );
    };
  },
  //  瀑布流
  getShowListWaterPall() {
    // console.log(this.category);
    return async (dispatch) => {
      const data = await axios.get(
        `/Show/Search/getShowList?city_id=${
          JSON.parse(localStorage.getItem("CITY_INFO")).cityId
        }&category=${this.category}&keywords=&venue_id=&start_time=&page=${
          this.props.pageIndex
        }&referer_type=index&version=6.1.1&referer=2`
      );
      
      console.log(33333,data);
      dispatch(theshowList(data.data.list))
      // dispatch(librartType(libraryActionType.GET_LIBRARYINIT, data.data.list));
        // console.log(data.list, this.city, this.category);
      let libraryLeft = []; //左边瀑布流盒子
      let libraryRight = []; //右边瀑布流盒子
      this.props.libraryInit.forEach((v, i) => {
        if (i % 2 === 0) {
          libraryLeft.push(v);
        } else {
          libraryRight.push(v);
        }
      });
      
      this.setState(
        {
          libraryLeft,
          libraryRight,
        },
        () => {
          this.switch = true;
        }
      );
   
    };
  },
};


//调用3个接口  导航 .. 地图(城市).. 瀑布流数据