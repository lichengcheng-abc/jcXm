import React, { Component } from 'react'
import vipCreator from '../../../store/actionCreator/vip'
import Loading from '../../../components/common/Loading'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import style from '../navCss/vip.module.css'
import banner from '../../../assets/img/cart/rAoKmV3ggTyAXnFrAAHF-ZAZv74104.png'
import one from '../../../assets/img/cart/vip_plus_double_points.3e1951f.png'
import ReactDom from 'react-dom'
import HeaderCard from '../../../components/card/HeaderCard'

class VipIndex extends Component {
    constructor() {
        super();
        this.state = {
            isLoading:true,
            legal:false
        };
    }
    handleLegal=()=>{
        var legal = document.getElementById('sp')
        this.setState({
            legal: !this.state.legal
         })
         if(this.state.legal){
            ReactDom.findDOMNode(legal).style.height = '409px'
            // console.log(document.getElementById('sp'))
            
        }else{
            ReactDom.findDOMNode(legal).style.height = '0'
        }
    }
        handleClick = (e) => {
            const nodeName = e.target.nodeName.toUpperCase()
            let tag = e.target;
            if (nodeName === 'LI') {
                let index = parseInt(tag.getAttribute('index'))
                this.setState({
                    currentIndex: index
                })
            }
        }
    render() {
        const {list} = this.props
        const {goods} = this.props
        const vipList = (
            <div>
                
                <HeaderCard>VIP + 会员</HeaderCard>
                <section className={style.section}>
                <div 
                    className={this.state.dateSelected ? style.select : style.disSelect }
                    >
                        <span
                        onClick={()=>{
                            this.props.history.push('/myjuooo/myjuooo')
                            // console.log(78787)
                        }}
                        >我的聚橙</span>
                        <span
                        onClick={()=>{
                            this.props.history.push('/')
                            // console.log(11111)
                        }}
                        >主页</span>
                    </div>
                    <div className={style.vip_plus}>
                        <div className={style.vip_title}></div>
                        <div className={style.list_content}>
                            <div className={style.list_yougou}>
                                {
                                    list.map(v=>(
                                       <div key={v.benefits_icon} className={style.list_yougou_item}
                                       
                                       >
                                            <img src={'http://img4.imgtn.bdimg.com/it/u=1884537291,1541599573&fm=26&gp=0.jpg'} alt=""/>
                                            <span>{v.benefits_name}</span>
                                        </div> 
                                    ))                                   
                                }
                           </div>   
                           <input type={'button'} className={style.btn_end} value={'立即开通￥99/年'}/>
                            <span className={style.vip_a}
                            onClick={()=>{
                                this.handleLegal()
                            }}
                            >权益解读</span>
                        </div>
                        
                            <img className={style.banner_img} src={banner} alt=""/>
                    </div>
                    <div className={style.discount}>
                    <span className={style.vip_p}><span className={style.vip_h2}>专享折扣</span><i className={style.vip_back}
                    onClick={()=>{
                        this.props.history.push('/theatre/theatreList')
                    }}
                    >></i></span>
                    <div className={style.goodsList}>
                        {
                            goods.map(v=>(
                                <div key={v.schedular_id} className={style.goodsList_item}
                                onClick={()=>{
                                    this.props.history.push('/ticket/'+v.show_id) 
                                }}
                                >
                                    <img style={{width:'100%'}} src={v.pic} alt=""/>
                                <span className={style.schedular_name}>{v.schedular_name}</span>
                            <span className={style.disc}><i>{v.min_discount}</i>折起</span>
                                </div>
                            ))
                        }
                                   
                    </div>
                    <div className={style.action_btn}
                    onClick={()=>{
                        window.removeEventListener('scroll',this.handleScroll);
                        this.props.history.push('/vip/discount') 
                    }}
                    onClick={()=>{
                        this.props.history.push('/theatre/theatreList')
                    }}
                    >查看更多演出>></div> 
                    </div>
                    <div className={style.double}>
                        <div className={style.double_center}>
                            <h1>双倍积分</h1>
                            <img className={style.double_img} src={one} alt=""/>
                        </div>
                        
                        
                    </div>
                    <div className={style.mo}> 更多VIP+尊享权益，敬请期待</div>
                    <div 
                        onClick={()=>{
                            this.handleMask()
                        }}
                        className={this.state.dateSelected ? style.mask : style.dismask } 
                    ></div>
                </section>
                <footer id={'abc'} className={style.footer}>立即开通￥99/年</footer>
                <div id={'sp'} className={style.legal}>
                    <div className={style.tit}
                    onClick={()=>{
                        this.handleLegal()
                    }}
                    >
                        <span>权益解读</span>
                        <strong
                        
                        ></strong>
                        
                    </div>
                    <h3 className={style.title_h3}>VIP+会员权益解读</h3>
                    <h4 className={style.tit_h4}>会员权益</h4>
                    <p className={style.tit_p}>优先购票、专属票价、专享折扣、专享券、全场包邮、双倍积分、赠观演券、明星活动、免费期刊、生日专享</p>
                    <h4 className={style.tit_h4}>权益详解</h4>
                    <p className={style.tit_p}>（注：VIP+会员，以下简称V+会员）</p>
                    <h4 className={style.tit_h4}>优先购票</h4>
                    <p className={style.tit_p}>优先购票，既优先购，是聚橙会员专属的一种提前购买权益。为回馈V+会员，聚橙会不定期筛选重点演出项目支持V+会员优先购买，即会员可在演出对外公售前优先购票支付。（部分演出项目有购买张数的限制）</p>
                    <h4 className={style.tit_h4}>优先购票</h4>
                    <p className={style.tit_p}>优先购票，既优先购，是聚橙会员专属的一种提前购买权益。为回馈V+会员，聚橙会不定期筛选重点演出项目支持V+会员优先购买，即会员可在演出对外公售前优先购票支付。（部分演出项目有购买张数的限制）</p>
                    <h4 className={style.tit_h4}>会员权益</h4>
                    <p className={style.tit_p}>优先购票、专属票价、专享折扣、专享券、全场包邮、双倍积分、赠观演券、明星活动、免费期刊、生日专享</p>
                    <h4 className={style.tit_h4}>权益详解</h4>
                    <p className={style.tit_p}>（注：VIP+会员，以下简称V+会员）</p>
                    <h4 className={style.tit_h4}>优先购票</h4>
                    <p className={style.tit_p}>优先购票，既优先购，是聚橙会员专属的一种提前购买权益。为回馈V+会员，聚橙会不定期筛选重点演出项目支持V+会员优先购买，即会员可在演出对外公售前优先购票支付。（部分演出项目有购买张数的限制）</p>
                    <h4 className={style.tit_h4}>优先购票</h4>
                    <p className={style.tit_p}>优先购票，既优先购，是聚橙会员专属的一种提前购买权益。为回馈V+会员，聚橙会不定期筛选重点演出项目支持V+会员优先购买，即会员可在演出对外公售前优先购票支付。（部分演出项目有购买张数的限制）</p>

                </div>
            </div>
        )
        return (
            <div>
                {
                    this.state.isLoading ? <Loading/> : vipList
                }

            </div>
        )
    }
    componentDidMount(){
        this.props.getVipListIndex.call(this)
        this.props.getVipGoodsIndex.call(this)
        window.addEventListener('scroll',this.handleScroll)
    }
    
    handleScroll=(event)=>{
            var abc = document.getElementById('abc')
            let scrollTop = document.documentElement.scrollTop
            // console.log(scrollTop)
            if(ReactDom.findDOMNode(abc)){
                // console.log(66666666)
                if(scrollTop<400){
                    ReactDom.findDOMNode(abc).style.height = 0
                }else{
                    ReactDom.findDOMNode(abc).style.height = '49px'
                }
            }
        
        
    }
}
function mapStateProps(state){
    // console.log(state)
    return {
        list:state.vipIndex.vipList,
        goods:state.vipIndex.goods
    }
}
function mapDispatchProps(dispatch){
    return bindActionCreators(vipCreator,dispatch)
}
export default connect(mapStateProps,mapDispatchProps)(VipIndex)
