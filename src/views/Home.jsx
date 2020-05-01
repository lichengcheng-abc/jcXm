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
                                        <img src={item.image_url} style={{ width: '345px', height: '139px' }} />
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
                        <img src={item.pic} alt=""/>
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
                  <div className={style.getVip}>
                     
                       
                  </div>

                 {/* {会员专享部分} */}





              


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
    }


}
function mapStateToProps(state) {
    // console.log(state)
    return {
        slideState: state.slide.slide_list,
        classify_list:state.classify.classify_list

    }
}
function mapDispatchToProps(dispatch) {
    return {
        upSlide() {
            dispatch(homeActionCreator.upSlide())
        }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Home)
