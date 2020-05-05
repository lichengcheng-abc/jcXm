import React, { Component } from 'react';
import style from '../../zjcss/ticket/ticket.module.css';
import {connect} from 'react-redux';
import axios from 'axios';
import ticketCreate,{upTicket} from '../../../store/actionCreator/ticketDetail';          
import { bindActionCreators } from 'redux';
class TicketDetail extends Component {
    render() {
        const static_data = this.props.static_data
        const city = this.props.city
        const venue = this.props.venue
        const time = this.props.time
        const show_desc = this.props.show_desc
        // console.log(show_desc.desc,0)
        return (
            
            <div>
                <div id={style.detail}>
                    <div className={style.header}>
                        <i></i>
                        <span>演出详情</span>
                        <i></i>
                    </div>
                    <div className={style.pro}>
                        <p><img src={static_data.pic}/></p>
                        <div>
                            <p className={style.city}>{static_data.show_name} </p>
                            <p className={style.price}>{this.$filters.currency(static_data.price_range)} </p>
                        </div>
                    </div>
                </div>

                <div id={style.server}>
                    <div className={style.choose}>
                        <span>可选座</span>
                        <span>电子票</span>
                        <span>退票无忧</span>
                    </div>
                    <hr/>
                    <div className={style.info}>
                        <p>{this.$filters.date(time.show_time_start_display)+'-'+this.$filters.date(time.show_time_end_display)} </p>
                        <p>{city.city_name+'|'+venue.venue_name} </p>
                        <span>{venue.venue_address} </span>
                    </div>
                    <div className={style.vip}>
                        <p onClick={()=>{this.props.history.push('/plus/index')}} ><span>橙PLUS卡 开通送￥200 最高省19.9元</span> <span>立即开卡></span> </p> 
                        <p onClick={()=>{this.props.history.push('/vip/index/1')}}>VIP:V+会员享 国内免邮+双倍积分</p>
                        <hr/>
                        <p>入场：1.1以上或5周岁以上的儿童，凭票入场，其他儿童谢绝入场</p>
                    </div>
                    <div className={style.show}>
                        <p className={style.yan}>演出介绍</p>
                        <p className={style.comment}><img style={{height:'386px'}} src='https://image.juooo.com/group1/M00/03/97/rAoKmV6nsNKARQMoAAIHrAD_wQ0155.png'/></p>
                        <hr/>
                        <div className={style.content}>
                            <span>剧情简介</span>
                            <p>大内容 </p>
                            <div>
                                <img src=""/>
                            </div>
                        </div>
                    </div>
                </div>

                <div id={style.recomm}> 
                    <p className={style.conn}>相关推荐</p>
                    <div className={style.big}>
                        <p><img src=""/></p>
                        <section>
                            <p>时间</p>
                            <p>介绍</p>
                            <p>地址</p>
                            <span>电子票</span> <span>可选座</span> <span>套票</span><br/>
                            <span>价格</span>
                        </section>
                    </div>
                </div>
            </div>
        )
    }
    //https://api.juooo.com/Schedule/Schedule/getScheduleInfo?schedular_id=111609
    //https://api.juooo.com/Show/Search/getShowList?category=37&city_id=36
    async componentDidMount(){
        // const id = this.props.match.params.id
        // console.log(id,'oo')
        this.props.getTicketDetail() 
        const {data} = await axios.get(`/Show/Search/getShowList?category=37&city_id=36}`)
        console.log(data,6666666666666)
    }
}
function mapStateToProps({ticketDetail}){
    return {
        static_data:ticketDetail.static_data,
        city:ticketDetail.city,
        venue:ticketDetail.venue,
        time:ticketDetail.time,
        show_desc:ticketDetail.show_desc,
        cate_id:ticketDetail.cate_id,
    }
}
function mapDispatchToProps(dispatch){
    //执行create下面的所有函数
    return bindActionCreators(ticketCreate,dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(TicketDetail)

