import React, { Component } from 'react'
import Swiper from 'swiper/js/swiper.js'

import 'swiper/css/swiper.min.css'
import style from './zjcss/home/home.module.css'

import { connect } from 'react-redux'

import homeActionCreator from './../store/actionCreator/home'
 class Home extends Component {
    render() {
        return (
            <div>
                <div className={style.homePage}>
                    <div className={style.dw}>
                        <img style={{ width: '19px', height: '19px' }} src={require('../assets/img/home/1.png')} alt="" />
                        <span style={{ fontWeight: 'bolder' }}>全国</span>
                    </div>

                    <div className={style.search} onClick={() => {
                        this.props.history.push('/search/index')
                    }}>
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

                <div className="swiper-container" style={{ width: '345px', height: '139px', borderRadius: '5px', marginTop: '10px', border: '1px solid grey' }}>
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
                    style={{ width: '345px', height: '100px', marginTop: '20px' ,marginLeft:'20px'}} />
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
                        <dd style={{ float: 'left', }}>
                            <h5 style={{lineHeight:'5px'}}>2020.08.13 - 10.03</h5>
                            <h5 style={{lineHeight:'5px'}}>聚成制作 | 法语音乐剧 《摇滚红</h5>
                            <h5 style={{lineHeight:'5px'}}>与黑</h5>
                            <h5 style={{color:'red'}}>
                               
                                <span>¥ 80 </span>
                                <span>起</span>
                            </h5>
                            <h5>
                                <span style={{color:'red'}}>6  </span>
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
                            this.props.history.push('/tour/tourShowInfo?sid=2')
                        }}>
                        <dt style={{ float: 'left', marginLeft: '15px' }}>
                            <img src={require('../assets/img/home/wt.png')}
                                style={{ width: '100px', height: '136px' }} alt="" />
                        </dt>
                        <dd style={{ float: 'left', }}>
                            <h5 style={{lineHeight:'10px',color:'#fefefe'}}>2020.07.13 周五 20:00</h5>
                            <h5 style={{lineHeight:'10px',color:'#fefefe'}}>【演出延期】 2020第七届城市戏剧</h5>
                            <h5 style={{lineHeight:'5px',color:'#fefefe'}}>杰荒诞喜剧</h5>
                            <h5 style={{lineHeight:'20px',color:'#fefefe'}}>深圳 | 南山文体中心剧院</h5>
                           
                        </dd>

                    </div>
                </div>
                 {/* 舞台剧 */}













                首页
            </div>
        )
    }
    componentDidUpdate() {
        // 这里是百度的查询结果是 如果是本地的数据的话是放在componentDidMount就可以
        // 如果是数据在异步的数据的话 就放在componentDidUpdate里面
        new Swiper('.swiper-container', {
            loop: true,//这里是自动轮播
            autoplay: {
                delay: 2000,
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
    }


}
function mapStateToProps(state) {
    // console.log(state)
    return {
        slideState: state.slide.slide_list,
        classify_list: state.classify.classify_list,
        vipIndex: state.vip.vipIndex,
        hotsRecommendList: state.hots.hotsRecommendList

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
        }

    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Home)

