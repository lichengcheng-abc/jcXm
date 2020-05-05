import React, { Component } from 'react';
import style from '../../zjcss/cardhappy/cardhappy.module.css';
import cardhappyCreate from '../../../store/actionCreator/cardhappy';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class CardproductCardhappy extends Component {
    render() {
        const cardhappyList = this.props.cardhappyList
        return (
            <div>
                <div className={style.header}>
                    <span onClick={()=>{this.props.history.go(-1)}} >{"<"} </span>
                    <span>欢乐家庭卡PLUS</span>
                    <span>{'...'} </span>
                    <hr/>
                </div>

                <div className={style.card}>
                    <div className={style.happy}>
                        <img src={require('../../../assets/img/happy/happy.png')} />
                        <p>欢乐家庭卡PLUS</p>
                        <span>￥999</span>
                        <span>有效期：12个月</span>
                    </div>
                    <div className={style.buy}>
                        <p onClick={()=>{this.props.history.push('/passport/login')}} >立即购卡</p>
                    </div>
                    <p style={{height:'39px',margin:'16px 0',marginLeft:'150px'}} >30张兑换券 低至<span style={{color:'red'}} >33元</span> </p>
                </div>


                <div id={style.change}> 
                    <p className={style.conn}>演出兑换 <span onClick={()=>{this.props.history.push('/Cardproduct/getYearShowList/228')}} >{'>'} </span></p> 
                    {   
                        cardhappyList.map(v=>(
                            <div onClick={()=>{this.props.history.push(`/ticket/${v.schedular_id}?card_group_id=228`)}} key={v.schedular_id} className={style.big}>
                                <p><img src={v.pic} /></p>
                                <div className={style.productor}>
                                    <p>{this.$filters.date( v.month_day)} </p>
                                    <p>{v.schedular_name} </p>
                                    <p>{v.city_name} | {v.venue_name} </p>
                                    <p>{v.leastDiscount} 起 </p>
                                </div>
                            </div> 
                        ))
                    }
                </div>
            </div>
        )
    }
    async componentDidMount(){
        this.props.getCardList()
    }
}

function mapStateToProps({cardhappy}){
    return {
        cardhappyList:cardhappy.cardhappyList
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators(cardhappyCreate,dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(CardproductCardhappy)
