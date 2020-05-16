import React, { Component } from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import style from '../navCss/plus.module.css'
import Loading from '../../../components/common/Loading'
import plusCreator from '../../../store/actionCreator/plus'
import last from '../../../assets/img/cart/save.e6e7f69.png'
import HeaderCard from '../../../components/card/HeaderCard'
class PlusIndex extends Component {
    constructor() {
        super();
        this.state = {
            isLoading:true,
        };
    }
   
    render() {
        const {list} = this.props
        const {header} = this.props
        const plusCard = (
            <div>
                <HeaderCard>橙PLUS卡</HeaderCard>
                <section className={style.section}>
  
                    <div className={style.banner}>
                        <div className={style.banner_center}>
                            <a href="#">活动规则</a>
                            <div className={style.ban_title}>{header.name}</div>
                            <div className={style.ban_detail}>
                                <i>开卡999</i><em>送</em><span>200</span><strong>储值卡</strong>
                            </div>
                            <p className={style.center_p}><span>赠送VIP+会员</span><i>年</i><em>尊享10大权益</em></p>
                        </div>
                    </div>
                    <input className={style.plus_btn} type={"button"} value={'立即开通'}/>
                    <div className={style.list_it}>
                        <div className={style.list_content}>
                            <h3>VIP尊享10大权益</h3>
                            <div className={style.list_yougou}>
                                {
                                    list.map(v=>(
                                       <div key={v.benefits_icon} className={style.list_yougou_item}>
                                           <div></div>
                                            <img src={'http://img4.imgtn.bdimg.com/it/u=1884537291,1541599573&fm=26&gp=0.jpg'} alt=""/>
                                            <span>{v.benefits_name}</span>
                                        </div> 
                                    ))
                                    
                                }
                                
                                
                            </div>
                            <input type={'button'} className={style.btn_end} value={'立即开通￥99/年'}/>
                        </div>
                       
                    </div>
                    <div className={style.last_item}>
                        <div className={style.last_pic} >
                            <img src={last} className={style.picI} alt=""/>
                        </div>
                                
                    </div>
                </section>
                <footer className={style.footer}>
                    <div className={style.content}>
                       <div className={style.footer_list}>开卡限时送<span>￥200</span></div>
                        <div className={style.footer_list_right}>立即开卡</div> 
                    </div>
                    
                </footer>
            </div>
        )
        return (
            <div>
                {
                   this.state.isLoading ? <Loading/> : plusCard
                }
                
            </div>
        )
    }
    componentDidMount(){
        this.props.getPlusHeaderIndex.call(this)
        this.props.getPlusListIndex.call(this)
        // console.log(this.props)
    }

}
function mapStateProps(state){
    // console.log(state)
    return {
        list:state.plusIndex.list,
        header:state.plusIndex.header
    }
}
function mapDispatchProps(dispatch){
    return bindActionCreators(plusCreator,dispatch)
}
export default connect(mapStateProps,mapDispatchProps)(PlusIndex)

