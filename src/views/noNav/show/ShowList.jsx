import React from 'react'
import filters from '../../../filters'
import {
    NavLink,
    withRouter
}from "react-router-dom";
import {
    LeftOutlined,
    EllipsisOutlined,
    EnvironmentOutlined 
} from '@ant-design/icons';
import {Drawer} from 'antd';
import axios from 'axios';
import style from "../../zjcss/showList/showTypeList.module.css"

class Show extends React.Component{
    constructor(props){
        super(props);
        this.state={
            visible:false,
            list:[],
            city_list:[],
            page:1,
            support_desc:[]
        }
    }
    
    render(){
        return(
            <div>
                <div className={style.show_library}>
                    {/* 头部 */}
                    <section className={style.library_title} >
                        <i className="icons-list" onClick={this.back.bind(this)} style={{height:'18px'}}><LeftOutlined/></i>
                        <h5 className={style.title_text}>演出</h5>
                        <i className="icons-list" ><strong style={{height:'4px',fontWeight:'bolder'}}><EllipsisOutlined/></strong></i>
                    </section>
                    {/* 导航模块 */}
                    <div className={style.show_type_wrap}>
                        <div className={style.show_type}>
                            <ul className={style.show_type_ul}>
                                <li id='1' onClick={this.setcategory.bind(this,0)}>
                                    <NavLink to={"/show/showsLibrary"}>全部</NavLink>
                                </li>
                                <li onClick={this.setcategory.bind(this,35)}>
                                    <NavLink to={"/show/showsLibrary"}>演唱会</NavLink>
                                </li>
                                <li onClick={this.setcategory.bind(this,36)}>
                                    <NavLink to={"/show/showsLibrary"}>音乐会</NavLink>
                                </li>
                                <li onClick={this.setcategory.bind(this,37)}>
                                    <NavLink to={"/show/showsLibrary"}>话剧歌剧</NavLink>
                                </li>
                                <li onClick={this.setcategory.bind(this,38)}>
                                    <NavLink to={"/show/showsLibrary"}>儿童亲子</NavLink>
                                </li>
                                <li onClick={this.setcategory.bind(this,79)}>
                                    <NavLink to={"/show/showsLibrary"}>音乐剧</NavLink>
                                </li>
                                <li onClick={this.setcategory.bind(this,91)}>
                                    <NavLink to={"/show/showsLibrary"}>戏曲综艺</NavLink>
                                </li>
                                <li onClick={this.setcategory.bind(this,99)}>
                                    <NavLink to={"/show/showsLibrary"}>展览</NavLink>
                                </li>
                                <li onClick={this.setcategory.bind(this,86)}>
                                    <NavLink to={"/show/showsLibrary"}>舞蹈芭蕾</NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className={style.city_wrap}>
                            <span className={style.city} onClick={this.showDrawer}>全国</span>
                            <span className="icons-list"><EnvironmentOutlined /></span>
                        </div>
                    </div>
                    {/* 内容部分 */}
                    <div className={style.library_wrap} style={{position:'absolute',left:'0',top:'0',boxSizing:'border-box',width:'100%'}}>
                        <section className={style.recommed_wrap}>
                            <div className={style.recommed_list} style={{position:'relative',top:'50px',padding:'0px 16px'}}>
                                {
                                    this.state.list.map((v)=>(
                                        // console.log(v.support_desc),
                                        <ul key={v.schedular_id} style={{listStyle:'none',width:'50%',float:'left',marginBottom:'8px'}}>
                                            <li style={{display:'flex',flexDirection:'column',width:'100%'}}>
                                                {/* 演出图片部分 */}
                                                <div className={style.show_icon} style={{width:'170px'}}>
                                                    <a href="#">
                                                        <img src={v.pic} style={{border:'2px solid #ebebeb',width:'170px',height:'224.54px',boxSizing:'border-box',borderRadius:'8px 8px 0 0'}}/>
                                                    </a>
                                                </div>
                                                {/* 演出名称 */}
                                                <div className={style.item_desc} style={{height:'130px',background:'#fff'}}>
                                                    <a href="#" style={{textDecoration:'none'}}>
                                                        <h3 className={style.text_double} style={{fontSize:'14px',color:'#232323',fontWeight:'normal',fontFamily:'"Avenir", Helvetica, Arial, sans-serif',display:'-webkit-box',maxWidth:'170px',height:'40px',margin:'0 auto',overflow:'hidden',textOverflow:'ellipsis',WebkitLineClamp:'2',WebkitBoxOrient:'vertical'}}>
                                                            <img src={v.method_icon} alt="load file fail" style={{height:'18px',marginRight:'5px',display:'inline-block',verticalAlign:'middle'}}/>
                                                            {v.name}
                                                        </h3>
                                                    </a>
                                                    <p className={style.show_date} style={{fontSize:'14px',color:'#9f9999'}}>2020.{v.show_time_top}</p>
                                                    <p style={{fontSize:'12px',height:'24px',lineHeight:'24px',margin:'0',color:'#999999',marginLeft:'8px'}}><strong style={{fontSize:'16px' ,color:'#ff7b3c',marginRight:'5px'}}>¥{v.min_price}</strong>起</p>
                                                    <p style={{margin:'0',padding:'0'}}>
                                                        <span style={{display:'inline-block',color:'#ff7b3c',background:'#ffffff',padding:'0px 4px',height:'20px',borderRadius:'5px',marginLeft:'8px'}}>{v.support_desc[0]}</span>
                                                        <span style={{display:'inline-block',color:'#ff7b3c',background:'#ffffff',padding:'0px 4px',height:'20px',borderRadius:'5px',marginLeft:'8px'}}>{v.support_desc[1]}</span><br/>
                                                        {/* <span style={{display:'inline-block',color:'#ff7b3c',background:'#fff1ef',padding:'0px 4px',height:'20px',borderRadius:'5px',marginLeft:'8px',marginTop:'5px'}}>限时8.5折起</span> */}
                                                    </p>
                                                    
                                                </div>
                                            </li>
                                        </ul>
                                    ))
                                }
                            </div>
                        </section>
                        <div style={{color:'#999',background:'#ff9037',position:'fixed',bottom:'0',right:'0',opacity:'.8'}}>
                            <a onClick={this.Loadmore.bind(this)}>加载更多</a>
                        </div>
                    </div>
                </div>
                
                {/* <Drawer
                    title="城市"
                    placement="right"
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                >
                    <ul className={style.list}>
                        {
                            this.state.city_list.map((v,i)=>(
                            <li key={i}>{v.name}</li>
                            ))
                        }
                    </ul>
                </Drawer> */}
            </div>
        )
    }
    async componentDidMount(){
        // console.log("1111111111111")
        const {data} = await axios.get("/city/city/getCityList?version=6.1.1&referer=2")
            this.setState({
                city_list:data.city_list
            })
        // console.log(data);
        this.setcategory()
    }
    back(){
        console.log("点击了返回按钮")
        this.props.history.go(-1)
    }
    async setcategory(category = 0){
        let page = this.state.page
        // console.log("222222222")
        const{data} = await axios.get ("/Show/Search/getShowList?city_id=0&category="+category+"&page="+page+"&referer_type=&version=6.1.1&referer=2",{
            params:{
                page:this.state.page,
            }

        })
        // 一旦状态发生改变, render会执行
      this.setState({
          page:data.page,
          list:data.list,
      })
        // console.log(data)
    }
    async Loadmore(category = 0){
        this.setState({
            page:this.state.page++
        })
        console.log("zzzzz")
        let page = this.state.page
        const {data} = await axios.get("/Show/Search/getShowList?category="+category+"&city_id=0&page="+page+"&keywords=&version=6.1.1&referer=2",{
            params:{
                page:this.state.page++
            }
        })
        this.setState({
            page:data.page,
            list:data.list
        })
        // console.log(data,66666)
    }
    showDrawer = ()=>{
        this.setState({
            visible:true,
        });
        // console.log(33333333)
    };

    onClose=()=>{
        this.setState({
            visible:false,
        });
    }
}

export default withRouter(Show)
