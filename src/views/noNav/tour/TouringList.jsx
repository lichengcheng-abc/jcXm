import React, { Component } from 'react';
import style from '../../zjcss/touring/touring.module.css';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import Loading from '../../../components/common/Loading';
import touringCreate from '../../../store/actionCreator/touring';

class TouringList extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading:true
        }
    }
    render() {
        const touringList = this.props.touringList
        const tourModule = (
            <div>
                <div id={style.header}>
                    <p onClick={()=>{this.props.history.go(-1)}} >{'<'} </p>
                    <p>巡回演出</p>
                    <hr/>
                </div>

                {
                    touringList.map(v=>(
                        <div key={v.id} id={style.touring}>
                            <section>
                                <p><img src={v.mobile_col_img} /></p>
                                <div className={style.show}>
                                    <p className={style.fj}>{v.name} </p>
                                    
                                    <div className={style.top}>
                                    {   
                                        v.citys.map(item=>(
                                                
                                                <div key={item.id} onClick={()=>{
                                                    this.props.history.push('/tour/tourshowinfo')
                                                }} className={style.tourCity}>
                                                    <div className={style.city}>
                                                        {item.name}
                                                        <span className={style.dot}></span>
                                                    </div>
                                                    <span className={style.time}>{(this.$filters.date(item.start_time)).slice(5,10)} </span>
                                                </div>
                                        ))
                                    }
                                    </div>
                                </div>
                            </section>
                        </div>
                    ))
                }
                
            </div>
        )

        return (
            this.state.isLoading === true ? <Loading></Loading> : tourModule
        )
    }
    componentDidMount(){
        this.props.getTouring.call(this)
    }
}
function mapStateToProps({touring}){
    return {
        touringList:touring.touringList
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators(touringCreate,dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(TouringList)
