import React, {Component} from "react";
import { connect } from "react-redux";
import style from "../../zjcss/showList/showTypeList.module.css"
import Drawer from "../../../components/common/Drawer";
import Loading from "../../../components/common/Loading";
import WaterfallEle from "../../../components/common/WaterfallEle";
import libraryAction from "../../../store/actionCreator/library";
import {
    LeftOutlined,
    EllipsisOutlined,
} from '@ant-design/icons';
import Axios from "axios";

class showList extends Component{
    constructor(props){
        super(props);
        this.category = 0 //演出类型
        this.city = 0; // 演出城市
        this.pageIndex = 1;
        this.switch = false; // 防止瀑布流滑动数据加载过快
        this.reLeft = null; // 左边瀑布流盒子
        this.reRight = null; // 右边瀑布流盒子
        this.navActive = 0;
        this.currentCity = "全国";
        this.state = {
            libraryLeft:[],
            libraryRight:[],
            mask:"none",
            right:"-561px",
            isClick:true
        };
    }

    showFn(){
        this.setState({
            mask:"none",
            right:"-561px",
        });
    }

    async getMapIdToData({cityId, currentCity, abbreviation}){
        const cityReset = JSON.parse(localStorage.getItem("CITY_INFO"));
        cityReset.cityId = cityId;
        cityReset.cityName = currentCity;
        cityReset.abbreviation = abbreviation;
        await localStorage.setItem("CITY_INFO", JSON.stringify(cityReset));
        await this.props.defaultPageIndex.call(this); // 重置为第一页
        await this.props.getShowListWaterPall.call(this); //获取数据
    }

    render(){
        return(
            <React.Fragment>
                <div style={{width:'100%',height:'100%',overflowX:'hidden'}}>
                    {this.state.libraryLeft.length > 0 ? (
                        <div>
                            {/* 头部 */}
                            <section className={style.library_title} style={{position:'fixed',top:'0'}}>
                                <i className="icons-list" onClick={this.back.bind(this)} style={{height:'18px'}}><LeftOutlined/></i>
                                <h5 className={style.title_text}>演出</h5>
                                <i className="icons-list" ><strong style={{height:'4px',fontWeight:'bolder'}}><EllipsisOutlined/></strong></i>
                            </section>
                            {/* 导航 */}
                            <div className={style.library_nav}>
                                <Drawer
                                    {...this.state}
                                    showFn = {this.showFn.bind(this)}
                                    drawerData = {this.props.libraryMap}
                                    getMapIdToData = {this.getMapIdToData.bind(this)}
                                ></Drawer>
                                <div className = {style.nav}>
                                    <ul>
                                        <li
                                            className = {
                                                this.category / 1 === 0 ? style["liActive"] : ""
                                            }
                                            key = {this.$randomKey()}
                                            onClick = {async () => {
                                                this.category = 0;
                                                await this.props.defaultPageIndex.call(this);
                                                await this.props.getShowListWaterPall.call(this);
                                                const {isClick} = this.state;
                                                if(isClick){
                                                    this.setState({isClick:false});
                                                    this.requList();
                                                }
                                            }}
                                        >
                                            全部
                                        </li>
                                        {this.props.libraryNav.map((v, i) =>(
                                            <li
                                                className={
                                                    this.category /1 === v.id ? style["liActive"] : ""
                                                }
                                                key={v.id}

                                                onClick = {
                                                    async() =>{
                                                        this.category = v.id;
                                                        console.log(this.category)
                                                        console.log(v.id)
                                                        await this.props.defaultPageIndex.call(this);
                                                        await this.props.getShowListWaterPall.call(this);
                                                    }
                                                }
                                            >
                                                {v.name}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                {/* mask遮罩层 */}
                                <div
                                    className={style.nav_map}
                                    onClick = {()=>{
                                        this.setState({mask:"block", right:0});
                                    }}
                                >
                                    <div style={{width:'75px'}}>
                                        <span>
                                            {JSON.parse(localStorage.getItem("CITY_INFO")).cityName}
                                        </span>
                                        <span className = {style.map_icon}>
                                            <img src={require("../../../assets/img/show/libraryMap.png")} alt=""/>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            {this.state.libraryLeft.length > 0 ? (
                                <div className={style.library_waterfall}>
                                    {/* 左边数据 */}
                                    <div
                                        className={style.library_left}
                                        ref={(el)=>(this.reLeft = el)}
                                    >
                                        {this.state.libraryLeft.map((v)=>(
                                            <WaterfallEle
                                                {...v}
                                                key={v.schedular_id+this.$randomKey()}
                                            >
                                            </WaterfallEle>
                                        ))}
                                    </div>
                                    {/* 右边数据 */}
                                    <div
                                        className = {style.library_right}
                                        ref={(el)=>(this.reRight = el)}
                                    >
                                        {this.state.libraryRight.map((v)=>(
                                            <WaterfallEle
                                                {...v}
                                                key={v.schedular_id+this.$randomKey()}
                                            ></WaterfallEle>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <div>暂无数据</div>
                            )}
                        </div>
                    ) : (
                        <Loading></Loading>
                    )}
                </div>
            </React.Fragment>
        );
    }
  
    async componentDidMount(){
        if(this.props.match.params.category_id){
            this.category = this.props.match.params.category_id;
            
        }
        
         await this.props.getLibraryNav();
         await this.props.getLibraryMap();
         await this.props.getShowListWaterPall.call(this);

        // 滑动事件
        window.onscroll = () => {
            let maxScrollHeight =
              document.documentElement.scrollTop || document.body.scrollTop; //body 实际高度
            let clientHeight =
              document.documentElement.clientHeight || document.body.clientHeight; //视口高度
            // 假设左边盒子高度最小
            let minDefaultDiv = this.reLeft;
            let minDefaultHeight = minDefaultDiv.scrollHeight;
            if(this.reLeft.scrollHeight>this.reRight.scrollHeight){
                minDefaultHeight = this.reRight.scrollHeight;
            }
            if(maxScrollHeight > minDefaultHeight - clientHeight){
                if(this.switch){
                    this.switch = false; //满足条件时 先关闭开关 获取数据异步程序
                    this.props.getShowListWaterPall.call(this);
                }
            }
        };
    }

    back(){
        this.props.history.go(-1)
    }

    
    requList=()=>{
        this.setState({isClick:true});
    }

    $randomKey(){
        const randomKEy = Math.floor(Math.random()*(900000)+100000);
        return randomKEy;
    }
}
function mapStateToProps (state) {
    return {
      libraryNav: state.nav.libraryNav,
      libraryMap: state.map.libraryMap,
      libraryInit: state.init.libraryInit,
      pageIndex: state.page.pageIndex
    };
  };
function  mapDispatchToProps (dispatch){
    return{
        getLibraryNav(){
            dispatch(libraryAction.getLibraryNav())
        },
        getLibraryMap(){
            dispatch(libraryAction.getLibraryMap())
        },
        defaultPageIndex(){
            dispatch(libraryAction.defaultPageIndex.call(this))
        },
        getShowListWaterPall(){
            dispatch(libraryAction.getShowListWaterPall.call(this))
        }

    }
};
export default connect(mapStateToProps, mapDispatchToProps)(showList);