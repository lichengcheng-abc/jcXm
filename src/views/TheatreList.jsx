import React, { Component } from 'react'
import style from './zjcss/theatreList/theatreList.module.css'
import more from '../assets/img/theater/more.2ce7873.png'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import theatreListCreator from '../store/actionCreator/theatreList'
import Loading from '../components/common/Loading'
class TheatreList extends Component {
    constructor() {
        super();
        this.state = {
            isLoading:true
        };

    }
    render() {
        const {theatreList} = this.props
        const thList = (
            <div>
                <header className={style.header}>
                        <div className={style.header_nav}>剧院</div>
                    </header>
                    <section className={style.section}>
                        {                  
                            theatreList.map(v=>(                      
                            <div key ={v.id}>  
                            <div className={style.stylistic}>
                                    <div className={style.stylistic_info}>                          
                                        <img className={style.stylistic_pic} width={100} src={v.pic} alt=""
                                        onClick={()=>{
                                            this.props.history.push('/detail/'+v.id) 
                                        }}
                                        />
                                        <div className={style.stylistic_con}>
                                            <p className={style.stylistic_name}>{v.name}</p>
                                            <p className={style.stylistic_count}>{v.count}场在售演出</p>
                                        </div>
                                        <img  className={style.more} src={more} alt=""
                                            onClick={()=>{
                                                this.props.history.push('/detail/'+v.id)
                                               console.log(v.id) 
                                            }}
                                        />
                                        
                                    </div>
                                    <div className={style.show}>             
                                    
                            {                            
                                    v.showList.map((k)=>(                               
                                        <div  key={k.id} className={style.showAction} >
                                            <div className={style.show_date}>
                                            {k.show_time}
                                                <span className={style.show_dot}></span>
                                            </div>
                                                <img className={style.action_pic} src={k.pic} />
                                        </div>
                                        
                                   
                                ))
                                
                            }
                            <div className={style.showAction} >
                                <div className={style.show_date}>                                   
                                    <span className={style.show_dot}></span>
                                </div>
                                <div className={style.look_more}
                                onClick={()=>{
                                    this.props.history.push('/search/index/'+v.venue_id)
                                   console.log(v.id) 
                                }}
                                >
                                    查看更多>>
                                    
                                </div>
                                
                            </div>
                        </div>
                            </div>   
                    </div>
                        ))  
                        
                    }
                    </section> 
            </div>
        )
            return (
                <div>
                    {
                      this.state.isLoading ? <Loading/> : thList
                    }
                </div>
            
        )
    }
    async componentDidMount(){
        this.props.getTheatreList.call(this)
    }
}
function mapStateToProps({theatreList}){
    // console.log(theatreList.theatreList)
    const arrList = []
    theatreList.theatreList.map(v=>{
        if(v.showList.length>0){
            arrList.push(v)
        }
        // console.log(arrList)
    })
    return {
        theatreList:arrList
    }
    
}
function mapDisPatchToProps(dispatch){
    return bindActionCreators(theatreListCreator,dispatch)
}
export default connect(mapStateToProps,mapDisPatchToProps)(TheatreList)
