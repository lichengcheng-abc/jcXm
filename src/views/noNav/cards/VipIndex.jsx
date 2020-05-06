import React, { Component } from 'react'
import vipCreator from '../../../store/actionCreator/vip'
import Loading from '../../../components/common/Loading'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import style from '../navCss/vip.module.css'
import more from '../../../assets/img/theater/more.2ce7873.png'
import banner from '../../../assets/img/cart/rAoKmV3ggTyAXnFrAAHF-ZAZv74104.png'
import one from '../../../assets/img/cart/vip_plus_double_points.3e1951f.png'
import ReactDom from 'react-dom'
class VipIndex extends Component {
    constructor() {
        super();
        this.state = {

            isLoading:true,
            
        };
    }
    render() {
        const {list} = this.props
        const {goods} = this.props
        const vipList = (
            <div>
                <header className={style.header}>
                    <i className={style.back}
                    onClick={()=>{
                        this.props.history.go(-1)
                    }}
                    >&lt;</i>
                    <h3 className={style.header_h3}>vip + 会员</h3>
                    <img className={style.more} src={more} alt=""/>
                </header>
                <section className={style.section}>
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
                            <span className={style.vip_a}>权益解读</span>
                        </div>
                        
                            <img className={style.banner_img} src={banner} alt=""/>
                    </div>
                    <div className={style.discount}>
                    <span className={style.vip_p}><span className={style.vip_h2}>专享折扣</span><i className={style.vip_back}>></i></span>
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
                    
                    >查看更多演出>></div> 
                    </div>
                    <div className={style.double}>
                        <div className={style.double_center}>
                            <h1>双倍积分</h1>
                            <img className={style.double_img} src={one} alt=""/>
                        </div>
                        
                        
                    </div>
                    <div className={style.mo}> 更多VIP+尊享权益，敬请期待</div>
                </section>
                <footer id={'abc'} className={style.footer}>立即开通￥99/年</footer>
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
        // console.log(this.props)

            console.log(687678)
            window.addEventListener('scroll',this.handleScroll)
        
        
    }
    
    handleScroll=(event)=>{
            var abc = document.getElementById('abc')
            let scrollTop = document.documentElement.scrollTop
            // console.log(scrollTop)
            if(ReactDom.findDOMNode(abc)){
                // console.log(66666666)
                if(scrollTop>400){
                    ReactDom.findDOMNode(abc).style.height = 0
                }else{
                    ReactDom.findDOMNode(abc).style.height = '49px'
                }
            }else{
                // console.log(98989)
            }
        
        
    }
}
function mapStateProps(state){
    console.log(state)
    return {
        list:state.vipIndex.vipList,
        goods:state.vipIndex.goods
    }
}
function mapDispatchProps(dispatch){
    return bindActionCreators(vipCreator,dispatch)
}
export default connect(mapStateProps,mapDispatchProps)(VipIndex)
