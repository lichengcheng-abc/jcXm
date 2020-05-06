import React, { Component } from 'react';
import style from '../../zjcss/group/group.module.css';
import {connect} from 'react-redux';
import groupCreate from '../../../store/actionCreator/group';
import { bindActionCreators } from 'redux';

class ActivityGroup extends Component {
    render() {
        const groupList = this.props.groupList
        return (
            <div>
                <div className={style.header}>
                    <span onClick={()=>{this.props.history.go(-1)}} >{"<"} </span>
                    <span>拼团</span>
                    <span>{'...'} </span>
                    <hr/>
                </div>


                <div id={style.group}>
                    {   
                        groupList.map(v=>(
                            <div onClick={()=>{this.props.history.push('/ticket/'+v.schedular_id)}} key={v.id} className={style.big}>
                                <p><img src={v.show_pic} /> <li>活动结束</li> </p>
                                <div className={style.diff}>
                                    <p>{this.$filters.date(v.end_time)} </p>
                                    <p>{v.show_name} </p>
                                    <p>{v.show_city} | {v.venue_name} </p>
                                    <span>2人团  {this.$filters.currency(v.group_price)} </span>
                                </div>
                            </div>
                        ))
                    }
                    
                </div>
                <div className={style.nomore}>没有更多了</div>
            </div>

        )
    }
    componentDidMount(){
        this.props.getGroupList()
    }
}

function mapStateToProps({group}){
    return {
        groupList:group.groupList
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators(groupCreate,dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(ActivityGroup)
















