import React, { Component } from 'react';
import style from '../../zjcss/ticket/ticket.module.css';
import {connect} from 'react-redux';
import ticketCreate from '../../../store/actionCreator/ticketDetail';          
class TicketDetail extends Component {
    constructor(props){
        super(props);
        // this.static_data = {}
        // this.state = {
        //     ticketInfo:{}
        // }
    }
    render() {
        return (
            <div>
                <div id={style.detail}>
                    <div className={style.header}>
                        <i></i>
                        <span>演出详情</span>
                        <i></i>
                    </div>
                    <div className={style.pro}>
                        <p><img src="https://image.juooo.com/group1/M00/03/6C/rAoKmV4AZ3GAK-xpAABsQm0qZyQ219.jpg"/></p>
                        <div>
                            <p className={style.city}>hhhhhhhhhhh </p>
                            <p className={style.price}>价格</p>
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
                        <p>时间</p>
                        <p>大地址</p>
                        <span>小地址</span>
                    </div>
                    <div className={style.vip}> 
                        <p>VIP:V+会员享 国内免邮+双倍积分</p>
                        <hr/>
                        <p>入场：1.1以上或5周岁以上的儿童，凭票入场，其他儿童谢绝入场</p>
                    </div>
                    <div className={style.show}>
                        <p className={style.yan}>演出介绍</p>
                        <p className={style.comment}><img src=""/>公告图片</p>
                        <hr/>
                        <div className={style.content}>
                            <span>剧情简介</span>
                            <p>剧情的内容</p>
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
    // async getDetail(){
    //     // const schedular_id = this.props.match.params
    //     //发送求情  得到数据
    //     const {data} = await axios.get('/Schedule/Schedule/getScheduleInfo',{
    //         params:{
    //             schedular_id:111609
    //         }
    //     })
    //     console.log(data)
    //     this.static_data = data.static_data
    //     console.log('111111111111111',this.static_data)
    //     // this.setState({
    //     //     ticketInfo:data,
    //     // })
    // }
    //https://api.juooo.com/Schedule/Schedule/getScheduleInfo?schedular_id=111609
    componentDidMount(){
        console.log('3',this)
        this.props.upTicket()   
    }
}
function mapStateToProps(state){
    return {
        static_data:state.static_data
    }
}
function mapDispatchToProps(dispatch){
    return {
        upTicket(){
            dispatch(ticketCreate.upTicket())
        } 
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(TicketDetail)

