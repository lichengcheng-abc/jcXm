import React, { Component } from 'react'
import Swiper from 'swiper/js/swiper.js'

import 'swiper/css/swiper.min.css'
import style from './zjcss/home/home.module.css'

import { connect } from 'react-redux'

import homeActionCreator from './../store/actionCreator/home'

// 弄加载中的小橘子
import Loading from '../components/common/Loading'



class Home extends Component {
    constructor() {
        super()
      
        this.rewaterfall = null;
        this.reLeft = null; //瀑布流左边元素
        this.reRight = null; //瀑布流右边元素
        this.switch = false; //防止瀑布流请求过快  开始关闭 因为组件加载时会调用一次
        this.state = {
            isLoading: true,

            waterfallLeft: [],
            waterfallRight: [],
        }
    }
    render() {
        // console.log( this.state.waterfallLeft,this.state.waterfallRight)

        const homeRender = (

            <div>
                <div className={style.homePage}>
                    <div className={style.dw}>
                        <img style={{ width: '19px', height: '19px' }} src={require('../assets/img/home/1.png')} alt="" />
                        <span style={{ fontWeight: 'bolder' }}>全国</span>
                    </div>

                    <div className={style.search} onClick={() => {
                        this.props.history.push('/search/index')
                    }} style={{border:'1px solid #e4e4e5', borderRadius: '40px'}}>
                        <img src={require('../assets/img/home/2.png')} style={{ width: '19px', height: '19px', marginLeft: '10px' }} alt="" />
                        <span style={{ color: 'grey', marginLeft: '10px' }} >搜索热门演出</span>
                    </div>
                    <div className={style.rili}>
                        <img src={require('../assets/img/home/3.png')} style={{ width: '19px', height: '19px' }} alt="" />
                    </div>


                </div>

                {/* 轮播图 */}
                {/* <div className="swiper-container" style={{ width: '345px', height: '139px' ,border:'1px solid red',marginTop:'10px'}}>
        <div className="swiper-wrapper">
            <div className="swiper-slide">Slide 1</div>
            <div className="swiper-slide">Slide 2</div>
            <div className="swiper-slide">Slide 3</div>
        </div>
            <div className='swiper-pagination'></div>
        </div> */}

                <div className="swiper-container" style={{ width: '345px', height: '139px', borderRadius: '5px', marginTop: '40px', border: '1px solid grey' }}>
                    <div className="swiper-wrapper">
                        {
                            this.props.slideState.map((item, index) => {
                                return (
                                    <div className="swiper-slide" key={index} onClick={() => {
                                        // console.log( item.url.slice(19) )
                                        this.props.history.push(item.url.slice(19))
                                    }}>
                                        <img src={item.image_url} style={{ width: '345px', height: '139px' }} alt="" />
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className='swiper-pagination'></div>
                </div>

                {/* {
                this.props.slideState.length
            } */}
                {/* 轮播图 */}

                {/* {分类部分} */}
                <div className={style.classify}>

                    {
                        this.props.classify_list.map((item) => (
                            <div key={item.id} className={style.classifyDiv} onClick={() => {
                                // console.log( item.url.slice(19) )
                                this.props.history.push(item.url.slice(19))
                            }}>
                                <img src={item.pic} alt="" />
                                <span>{item.name}</span>
                            </div>
                        )
                        )
                    }
                    {/* {
                this.props.classify_list.length
            }         */}
                </div >
                {/* {分类部分} */}

                {/* {会员专享部分} */}
                {/* <div className={style.getVip}>
                  <div className={style.getVips}>
                      <div className={style.getVips1}>
                          <img src={require('../assets/img/home/hy1.png')} alt="" style={{ width: '19px', height: '19px' }}/>
                          <span style={{color:'#6b4218'}}>会员专享折扣</span>
                      </div>
                      <span style={{color:'#6b4218'}}>99元/年></span>
                  </div>

                  <div className={style.getVipx}>
                    <dt style={{float:'left'}}>
                       <img src={require('../assets/img/home/hy2.jpg')} style={{ width: '55px', height: '75px' }} alt=""/>

                    </dt>  
                    <dd style={{float:'left',marginLeft:'10px'}}>
                        <span>小城堡</span>
                        <div className={style.zhe}>
                           <div>
                               <span style={{color:'#ff7351',marginRight:'5px',fontSize:'16px'}}>5</span>
                               <span style={{color:'#a1a1a0'}}>折起</span>
                           </div>
                           <div className={style.qg}>立即抢购</div>
                        </div>
                    </dd>
                  </div>
                   
              </div> */}



                <div className={style.getVip}>
                    <div className={style.getVips} onClick={() => {

                        this.props.history.push('/vip/index/1')
                    }}>
                        <div className={style.getVips1}>
                            <img src={require('../assets/img/home/hy1.png')} alt="" style={{ width: '19px', height: '19px' }}

                            />
                            <span style={{ color: '#6b4218' }}>会员专享折扣</span>
                        </div>
                        <span style={{ color: '#6b4218' }}>99元/年></span>
                    </div>

                    <div>
                        <div className="swiper-container"
                            style={{ width: '315px', height: '120px', borderRadius: '5px', marginTop: '4px', }}
                        >
                            <div className="swiper-wrapper" >
                                {
                                    this.props.vipIndex.map((item, index) => {
                                        return (

                                            <div className="swiper-slide" key={index} onClick={() => {

                                                this.props.history.push('/ticket/' + item.schedular_id)
                                            }}>
                                                <div className={style.getVipx}>
                                                    <dt style={{ float: 'left', width: '55px', height: '75px' }}>
                                                        <img src={item.pic} style={{ width: '55px', height: '75px' }} alt="" />

                                                    </dt>
                                                    <dd style={{ float: 'right', marginLeft: '0px', width: '250px' }}>
                                                        <span>{item.schedular_name}</span>
                                                        <div className={style.zhe}>
                                                            <div>
                                                                <span style={{ color: '#ff7351', marginRight: '5px', fontSize: '16px' }}>5</span>
                                                                <span style={{ color: '#a1a1a0' }}>折起</span>
                                                            </div>
                                                            <div className={style.qg}>立即抢购</div>
                                                        </div>
                                                    </dd>
                                                </div>
                                            </div>



                                        )
                                    })
                                }

                            </div>
                            <div className='swiper-pagination'></div>
                        </div>
                    </div>

                </div>
                {/* {
                 this.props.vipIndex.length 
              } */}

                {/* {会员专享部分} */}

                {/* {充9999部分} */}
                <div onClick={() => {
                    this.props.history.push('/plus/index')
                }}>
                    <img src={require('../assets/img/home/999.png')} alt=""
                        style={{ width: '345px', height: '100px', marginTop: '20px', marginLeft: '20px' }} />
                </div>
                {/* {充9999部分} */}




                {/* {热门演出部分} */}



                <div className={style.hotShow}>
                    <div className={style.hotShows}>
                        <span style={{ fontSize: '18px', fontWeight: 'bold' }}>热门演出</span>
                        <span style={{ fontSize: '15px' }} onClick={() => {
                            this.props.history.push('/show/showsLibrary')
                        }}
                        >全部 ></span>
                    </div>
                    <div className={style.hotShowx}>

                        <div style={{ overflowX: 'auto', height: '356px', display: 'flex' }}>

                            {
                                this.props.hotsRecommendList.map((v, index) => (
                                    <span key={index} style={{ width: '100px', height: '200px', marginRight: '10px', display: 'flex', flexDirection: 'column' }}
                                        onClick={() => {

                                            this.props.history.push(v.schedular_url.slice(19))
                                        }}
                                    >

                                        <img src={v.pic}
                                            style={{ width: '100px', height: '136px', borderRadius: '5px', display: 'inline-block' }} alt="" />
                                        <i style={{ fontStyle: 'normal' }}> {v.show_name.slice(0, 9)}</i>
                                        <i style={{ width: '100px', whiteSpace: 'wrap', overflow: 'hidden', textOverflow: 'ellipsis', fontStyle: 'normal' }}>
                                            {v.show_name.slice(9, 20)}</i>

                                    </span>
                                ))
                            }
                        </div>

                    </div>



                </div>
                {/* {
               this.props.hotsRecommendList.length 
            } */}

                {/* {热门演出部分} */}

                {/* {巡回演出} */}
                <div className={style.tour}>
                    <div className={style.tours}>
                        <span style={{ fontSize: '18px', fontWeight: 'bold' }}>巡回演出</span>
                        <span style={{ fontSize: '15px' }} onClick={() => {
                            this.props.history.push('/touring')
                        }}
                        >全部 ></span>
                    </div>
                    <div className={style.tourx} onClick={() => {
                        this.props.history.push('/tour/tourShowInfo?sid=2')
                    }}>
                        <dt style={{ float: 'left', marginLeft: '15px' }}>
                            <img src="https://image.juooo.com/group1/M00/04/3E/rAoKNV59rlWAUODrAABlWN_fCvM347.jpg"
                                style={{ width: '100px', height: '136px' }} alt="" />
                        </dt>
                        <dd style={{ float: 'left', marginLeft: '20px' }}>
                            <h5 style={{ lineHeight: '30px' }}>2020.08.13 - 10.03</h5>
                            <h5 style={{ lineHeight: '30px' }}>聚成制作 | 法语音乐剧 《摇滚红</h5>
                            <h5 style={{ lineHeight: '10px' }}>与黑</h5>
                            <h5 style={{ lineHeight: '40px' }}>

                                <span style={{ color: 'red' }}>¥ 80 </span>
                                <span>起</span>
                            </h5>
                            <h5>
                                <span style={{ color: 'red' }}>6  </span>
                                <span>程巡演</span>
                            </h5>
                        </dd>

                    </div>
                </div>
                {/* {巡回演出} */}

                {/* 舞台剧 */}
                <div className={style.wt}>
                    <div className={style.wts}>
                        <span style={{ fontSize: '18px', fontWeight: 'bold' }}>舞台剧</span>
                        <span style={{ fontSize: '15px' }} onClick={() => {
                            this.props.history.push('/show/showsLibrary?cid=0&caid=37')
                        }}
                        > ></span>
                    </div>
                    <div className={style.wtx} onClick={() => {
                        this.props.history.push('/ticket/112293')
                    }}>
                        <dt style={{ float: 'left', marginLeft: '15px' }}>
                            <img src={require('../assets/img/home/wt.png')}
                                style={{ width: '100px', height: '136px' }} alt="" />
                        </dt>
                        <dd style={{ float: 'left', marginLeft: '20px' }}>
                            <h5 style={{ lineHeight: '30px', color: '#fefefe' }}>2020.07.13 周五 20:00</h5>
                            <h5 style={{ lineHeight: '30px', color: '#fefefe' }}>【演出延期】 2020第七届城市戏剧</h5>
                            <h5 style={{ lineHeight: '10px', color: '#fefefe' }}>杰荒诞喜剧</h5>
                            <h5 style={{ lineHeight: '40px', color: '#fefefe' }}>深圳 | 南山文体中心剧院</h5>

                        </dd>

                    </div>

                    <div className={style.wtx2} style={{ marginLeft: '25px', marginTop: '25px' }}
                    >

                        <div style={{ overflowX: 'auto', height: '356px', display: 'flex' }}>

                            {
                                this.props.wtList.map((v, index) => (
                                    <span key={index}
                                        style={{ width: '100px', height: '200px', marginRight: '10px', }}
                                        onClick={() => {
                                            this.props.history.push(v.url.slice(19))
                                        }}
                                    >

                                        <img src={v.pic}
                                            style={{ width: '100px', height: '136px', borderRadius: '5px', display: 'inline-block' }} alt="" />
                                        <h6 style={{ fontStyle: 'normal' }}> {v.schedular_name.slice(0, 9)}</h6>
                                        <h6 style={{ width: '100px', whiteSpace: 'wrap', overflow: 'hidden', textOverflow: 'ellipsis', fontStyle: 'normal' }}>
                                            {v.schedular_name.slice(9, 20)}</h6>
                                        <i style={{ color: 'red', fontStyle: 'normal' }}>¥{v.low_price.slice(0, 2)} </i>
                                        <i style={{ fontStyle: 'normal' }}>起</i>

                                    </span>
                                ))
                            }
                        </div>

                    </div>

                </div>
                {/* 舞台剧 */}


                {/* {为你推荐} */}
    
                <div className={style.tj}>
                    <div className={style.tjs}>
                        <span style={{ fontSize: '18px', fontWeight: 'bold' }}>为你推荐
                      
                        </span>
                       

                    </div>
                    <div ref={(el) => (this.rewaterfall = el)}>
                        <div ref={(el) => (this.reLeft = el)} style={{ width: '166px',float: 'left',marginRight:'10px' }} >
                            {
                               
                               this.state.waterfallLeft.map((v, index) => (
                                   
                                    <h6 key={index} 
                                    style={{ width: '169px', height:'340px',marginBottom:'5px',border:'1px solid #e4e4e5',borderRadius:'10px'}} 
                                    onClick={() => {
                                        this.props.history.push('/ticket/'+v.schedular_id)
                                    }}
                                    >
                                        <img src={v.pic} alt="" style={{ width: '169px',  borderRadius:'5px'}} />
                                        <span key={index} style={{width:'169px',display:'flex', flexDirection: 'column', marginBottm:'2px'}}>
                                         <h6>
                                            <span 
                                            style={{fontStyle: 'normal',fontSize:"10px", color:"#ffffff" ,padding:'0px 5px',height:'32px',background:'#ff6051',borderRadius:'5px'}}>
                                                主办</span>
                                            <span style={{fontStyle: 'normal'}}>{v.name.slice(0,9)}</span>
                                        </h6>
                                        <h6>{v.name.slice(9,20)}</h6>
                                        <h6>2020{v.show_time_top} </h6>
                                        <h6>
                                            <span style={{ color: 'red' }}>¥ {v.min_price} </span>
                                            <span>起</span>

                                        </h6>
                                        <h6>
                                            <span  style={{fontSize:"10px", color:"red" ,padding:'0px 5px',height:'32px',background:'#fff1ef',borderRadius:'5px'}}>电子票</span>
                                            <span style={{fontSize:"10px", color:"red" ,padding:'0px 5px',height:'32px',background:'#fff1ef',borderRadius:'5px'}}>可选座</span>
                                        </h6>
                                        <h6 style={{fontSize:"10px", width:'60px' ,color:"red" ,padding:'0px 5px',height:'16px',background:'#fff1ef',borderRadius:'5px'}}>限时8折起</h6>
                                    </span> 

                                    </h6>






                                ))
                            }


                        </div>
                        <div ref={(el) => (this.reRight = el)} style={{ width: '166px',height:'200px',float: 'left',marginRight:'8px' }}>
                            {
                                
                                this.state.waterfallRight.map((v, index) => (
                                   
                                    <h6 key={index} 
                                    style={{ width: '169px', height:'360px',marginBottom:'10px',border:'1px solid #e4e4e5',borderRadius:'5px'}}
                                    onClick={() => {
                                        this.props.history.push('/ticket/'+v.schedular_id)
                                    }}
                                    >
                                    <img src={v.pic} alt="" style={{ width: '169px',  borderRadius:'5px'}} />
                                    <span key={index} style={{width:'169px',display:'flex', flexDirection: 'column', marginBottm:'2px'}}>
                                     <h6>
                                        <span 
                                        style={{marginTop:'5px',fontStyle: 'normal',fontSize:"10px", color:"#ffffff" ,padding:'0px 5px',height:'32px',background:'#ff6051',borderRadius:'5px'}}>
                                            主办</span>
                                        <span style={{fontStyle: 'normal'}}>{v.name.slice(0,9)}</span>
                                    </h6>
                                    <h6>{v.name.slice(9,20)}</h6>
                                    <h6>2020{v.show_time_top} </h6>
                                    <h6>
                                        <span style={{ color: 'red' }}>¥ {v.min_price} </span>
                                        <span>起</span>

                                    </h6>
                                    <h6>
                                        <span  style={{fontSize:"10px", color:"red" ,padding:'0px 5px',height:'32px',background:'#fff1ef',borderRadius:'5px'}}>电子票</span>
                                        <span style={{fontSize:"10px", color:"red" ,padding:'0px 5px',height:'32px',background:'#fff1ef',borderRadius:'5px'}}>可选座</span>
                                    </h6>
                                    <h6 style={{fontSize:"10px", width:'30px' ,color:"red" ,padding:'0px 5px',height:'16px',background:'#fff1ef',borderRadius:'5px'}}>套票</h6>
                                    <h6 style={{fontSize:"10px", width:'60px' ,color:"red" ,padding:'0px 5px',height:'16px',background:'#fff1ef',borderRadius:'5px'}}>限时8折起</h6>
                                </span> 

                                </h6>
                                ))



                            }

                        </div>
                    </div>


                </div>

                {/* {为你推荐} */}











            </div>

        )



        return (

            <div>
                {
                    this.state.isLoading === true ? <Loading /> : homeRender
                }

            </div>

        )
    }
    componentDidUpdate() {
        // 这里是百度的查询结果是 如果是本地的数据的话是放在componentDidMount就可以
        // 如果是数据在异步的数据的话 就放在componentDidUpdate里面
        new Swiper('.swiper-container', {
            loop: true,//这里是自动轮播
            autoplay: {
                delay: 3000,
                disableOnInteraction: false
            },
            pagination: {
                el: '.swiper-pagination',//这里是分页器设置
            }
        });



    }
    async componentDidMount() {

        this.props.upSlide()
        // console.log(this.props)

        this.props.upVipIndex()

        this.props.upHots()

        this.props.upWtlist.call(this)

        this.props.upShowList.call(this)



        // 有滚动条监听事件 
        window.onscroll = () => {
            let maxScrollHeight =
                document.documentElement.scrollTop || document.body.scrollTop; //浏览器卷去的高度 body 实际高度
            let clientHeight =
                document.documentElement.clientHeight || document.body.clientHeight; // 屏幕的高度 视口高度 

            // //假设左边盒子高度最小
            let minDefaultDiv = this.reLeft;

            if (minDefaultDiv) {
                let minDefaultHeight = this.reLeft.scrollHeight;
                // waterfallEle.forEach()
                if (this.reLeft.scrollHeight > this.reRight.scrollHeight) {
                    minDefaultHeight = this.reRight.scrollHeight;
                }
                if (maxScrollHeight + clientHeight > minDefaultHeight) {
                    // 网页可见区域高：document.body.clientHeight

                    // 网页正文全文高：document.body.scrollHeight  老师解释的就是 当该元素把页面填充满时就是全文的高
                    // 网页可见区域高（包括边线的高）：document.body.offsetHeight
                    // 网页被卷去的高：document.body.scrollTop
                    // 屏幕分辨率高：window.screen.height

                    // 这个就是浏览器卷去的高度 加上屏幕的高度 大于此时的  最短的此时的它的高度 网页正文全文高：document.body.scrollHeight

                    //   这个开关的设置是 就是只有是true的时候是 才可以是再次请求数据 然后设置是在actionCreater的调取完数据
                    //   此时把值改变成true 即该次的数据请求完了才可以请求下页的数据 即是之前老师讲过的就是比如此时有短的出现了
                    // 若此时数据还没回来的话 此时会不断请求 所以就死让它这次的数据请求完才可以请求下一页的数据
                    if (this.switch) {
                        this.switch = false; //满足条件时 先关闭开关  获取数据异步程序
                        this.props.upShowList.call(this)

                        //   this.props.getShowListWaterPall.bind(this)();
                    }
                }
            }
        }

     
    }


}
function mapStateToProps(state) {
    // console.log(state)
    return {
        slideState: state.slide.slide_list,
        classify_list: state.classify.classify_list,
        vipIndex: state.vip.vipIndex,
        hotsRecommendList: state.hots.hotsRecommendList,
        wtList: state.wt.wtList,
        showList: state.showList.showList,
        pageIndex: state.showList.pageIndex

    }
}
function mapDispatchToProps(dispatch) {
    return {
        upSlide() {
            dispatch(homeActionCreator.upSlide())
        },
        upVipIndex() {
            dispatch(homeActionCreator.upVipIndex())
        },
        upHots() {
            dispatch(homeActionCreator.upHosts())
        },

        upWtlist() {
            // console.log(this)
            dispatch(homeActionCreator.upWtlist.call(this))
        },

        upShowList() {
            dispatch(homeActionCreator.upShowList.call(this))
        }

    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Home)

