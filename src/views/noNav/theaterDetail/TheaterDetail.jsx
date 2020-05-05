import React, { Component } from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import style from './style.module.css'
import Loading from '../../../components/common/Loading'
import detailCreator from '../../../store/actionCreator/theaterDetail'
class TheaterDetail extends Component {
    constructor() {
        super();
        this.state = {
            isLoading:true
        };

    }
    render() {
        const {list} = this.props
        const {result} = this.props
        const thDetail = (
            <div>
                <header className={style.header}>
                    <div className={style.header_back}>
                        <i className={style.goback}
                            onClick={()=>{
                                this.props.history.go(-1)
                            }}
                        >&lt;</i>
                    </div>
                    <div className={style.header_thea}>
                        <div className={style.header_th}>
                            <div className={style.th_pic}>
                                <img src={list.theatre_pic} alt=""/>
                            </div>
                            <div className={style.header_th_title}>
                                <h1 className={style.header_act}>{list?list.theatre_name:'……'}</h1>
                        <p className={style.header_actp}>{list.sch_num}场在售演出</p>
                            </div>
                            
                        </div>
                        <div className={style.address}>
                            <div className={style.add}>
                        <p className={style.add_p}>{list.city_name} | {list.theatre_address}</p>
                            </div>
                            <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3233563107,114641959&fm=26&gp=0.jpg" alt="" className={style.map}/>
                        </div>
                        
                    </div>
                    
                </header>
                <section className={style.section}>
                <div className={style.section_title}>
                                热门演出
                            </div>
                    {
                        result.map(v=>(                          
                            <div key = {v.schedular_id} className={style.con}
                            onClick={()=>{
                                this.props.history.push('/ticket/'+v.schedular_id)
                            }}
                            >
                                <div className={style.con_content}>
                                    <p className={style.image}>
                                        <img src={v.pic} alt=""/>
                                    </p>
                                    <div className={style.con_right}>
                                        <p className={style.date}>{v.end_show_time}</p>
                                        <p className={style.date}>{v.name}</p>
                                        <p className={style.con_add}>{list.city_name} | {list.theatre_address}</p>
                                        <p className={style.support_desc}>
                                            {
                                               v.support_desc.map((a,index)=>(
                                                <div k= {index}>
                                                    <span className={style.support_desc_btn}>{a}</span>
                                                </div>
                                                
                                               
                                            )) 
                                            }                                           
                                         </p>
                                        <p className={style.price}><span className={style.p_price}>￥{v.min_price}</span>起</p>
                                        
                                    </div>
                                </div>
                            </div> 
                        ))
                       
                    }
                    <p className={style.end_more}>没有更多了</p>
                </section>
            </div>
            )
        return (   
            <div>
                {
                    this.state.isLoading ? <Loading/> : thDetail
                }
            </div>
        )
    }
    componentDidMount(){
        
        this.props.listMore.call(this,this.props.match.params.id)
        this.props.getlist.call(this,this.props.list.venue_ids)
        
        console.log(this.props)
    }
}
function mapStateToprops(state){
    console.log(state)
        return {
        list:state.theaterDetail.list,
        result:state.theaterDetail.result
    } 
}
function mapDisPatchToProps(dispatch){
    return {
       ...bindActionCreators(detailCreator,dispatch) 
    } 
}
export default connect(mapStateToprops,mapDisPatchToProps)(TheaterDetail)