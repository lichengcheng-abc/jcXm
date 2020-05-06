import React, { Component } from 'react';
import style from '../../zjcss/tourShow/tourShow.module.css';
import tourShowCreate from '../../../store/actionCreator/tourShow';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class TourShowInfo extends Component {
    constructor(props){
        super(props);
    }
    render() {
        const name = this.props.name;
        const city_num = this.props.city_num;
        const show_num = this.props.show_num;
        const start_time = this.props.start_time;
        const end_time = this.props.end_time;
        const tourShowList = this.props.tourShowList;
        return (
            <div>
                <div id={style.detail}>
                    <div className={style.header}>
                        <span onClick={()=>{this.props.history.go(-1)}} >{'<'} </span>
                        <span>演出详情</span>
                        <i></i>
                    </div>
                    <div className={style.pro}>
                        <p><img src="https://image.juooo.com/group1/M00/04/3E/rAoKNV59rlWAUODrAABlWN_fCvM347.jpg"/></p>
                        <div>
                            <p className={style.city}>{name} </p>
                            <p className={style.show}>{city_num} 个城市 | {show_num}场演出 </p>
                            <p className={style.price}>{this.$filters.date(start_time)} - 10.03 </p>
                        </div>
                    </div>
                </div>

                <div id={style.music}>
                    {
                        tourShowList.map(v=>(
                            <ul onClick={()=>{
                                this.props.history.push(`/ticket/${v.sch_id}`)
                            }} key={v.venue_id}>
                                <li>
                                    <div className={style.time}>
                                        <span>09/</span> 
                                        <span>11-13</span>
                                    </div>
                                    <div className={style.des}>
                                        <p>{v.sch_name} </p>
                                        <p>{v.city_name} | {v.venue_name} </p>
                                        <p>{this.$filters.currency(v.min_price)} 起 </p>
                                    </div>
                                </li>
                            </ul>
                        )) 
                    }
                </div>
            </div>
        )
    }
    //https://api.juooo.com/show/tour/getInfo?id=2
    async componentDidMount(){
        console.log('222',this.props)
        this.props.getTourShowList() 
    }
}
function mapStateToProps({tourShow}){
    return {
        name:tourShow.name,
        city_num:tourShow.city_num,
        show_num:tourShow.show_num,
        start_time:tourShow.start_time,
        end_time:tourShow.end_time,
        tourShowList:tourShow.tourShowList
    }
}
function mapDispatchToProps(dispatch){
    //必须先得执行这个return的这个，不然得不到componentDidMount
    return bindActionCreators(tourShowCreate,dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(TourShowInfo)
