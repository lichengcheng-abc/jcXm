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
        const tips = this.props.tips
        const recommList = this.props.recommList
        // console.log(show_desc.desc,0)
        return (
            
            <div>
                <div id={style.detail}>
                    <div className={style.header}>
                        <span onClick={()=>{this.props.history.push('/')}} >{"<"} </span>
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
                        <p>{this.$filters.date(time.show_time_start_display)+'-'+(this.$filters.date(time.show_time_end_display)).slice(5,10)} </p>
                        <p>{city.city_name} | {venue.venue_name} </p>
                        <span>{venue.venue_address} </span>
                    </div>
                    <div className={style.vip}>
                        <p onClick={()=>{this.props.history.push('/plus/index')}} ><span>橙PLUS卡 开通送￥200 最高省19.9元</span> <span>立即开卡></span> </p> 
                        <p onClick={()=>{this.props.history.push('/vip/index/1')}}>VIP+：V+会员享 <span style={{color:"red",marginLeft:'10px'}} >国内免邮+双倍积分</span></p>
                        <hr/>
                        <p>入场：{tips.desc} </p>
                    </div>
                    <div className={style.show}>
                        <p className={style.yan}>演出介绍</p>
                        <p className={style.comment}><img style={{height:'386px'}} src='https://image.juooo.com/group1/M00/03/97/rAoKmV6nsNKARQMoAAIHrAD_wQ0155.png'/></p>
                        <hr/>
                        <div className={style.content}>
                            <p dangerouslySetInnerHTML={{__html: show_desc.desc}}></p>
                        </div>
                    </div>
                </div>

                <div id={style.recomm}> 
                    <p className={style.conn}>相关推荐</p>

                    {
                        recommList.map(v=>(
                            <div onClick={()=>{this.props.getTicketDetail(v.schedular_id)}} key={v.show_id} className={style.big}>
                                <p><img src={v.pic} /></p>
                                <div className={style.diff}>
                                    <p>{(v.start_show_time).slice(0,10)} - {(v.end_show_time).slice(5,10)} </p>
                                    <p>{v.name} </p>
                                    <p>{v.city_name} | {v.venue_name} </p>
                                    <span>电子票</span> <span>可选座</span> <span>套票</span><br/>
                                    <span>{v.min_price} </span> 起 
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
    //https://api.juooo.com/Schedule/Schedule/getScheduleInfo?schedular_id=111609
    //https://api.juooo.com/Show/Search/getShowList?category=37&city_id=36
    async componentDidMount(){
        this.props.getTicketDetail(this.props.match.params.id);
        this.props.getRecomm(this.props.static_data.cate_parent_id,this.props.city.city_id)
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
        tips:ticketDetail.tips,
        recommList:ticketDetail.recommList,
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators(ticketCreate,dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(TicketDetail)

