import React, { Component } from 'react'
import style from '../../zjcss/search/search.module.css'
import searchActionCreator from '../../../store/actionCreator/search'
import { connect } from 'react-redux'
 class Search extends Component {
     constructor(){
        super()
        this.state ={
            ele:''
        } 
     }
    render() {
        return (
            <div>

                <div style={{display:'flex'}}>
                    <span className={style.ss} 
                    style={{width:'300px',height:'30px',border:'1px solid #e4e4e5', borderRadius: '40px', backgroundColor: '#f5f5f5'}}>
                        <img src={require('../.././../assets/img/home/2.png')} style={{ width: '19px', height: '19px', marginLeft: '10px' }} alt="" />
                        <input type={'text'} 
                        style={{ color: 'grey', marginLeft:'10px',border:'none',outline:'medium',backgroundColor:'#f5f5f5'}}
                        placeholder={'搜索热门演出'}
                        ref={(e)=>{
                            this.ele = e
                        }}
                        onInput={()=>{
                            // console.log(this.ele.value)
                            // console.log(this)
                            this.props.upSearchList.call(this,this.ele.value)

                        }}
                        />
                           
                       

                        <img src={require('../.././../assets/img/home/x.png')}
                         style={{ width: '19px', height: '19px', marginLeft: '60px' ,fontSize:'10px'}} alt="" />
                    </span>
                    <span style={{ color: 'grey', marginLeft: '10px' ,marginTop:'10px'}}
                    onClick={() => {
                        this.props.history.push('/')
                    }}>
                        取消
                  </span>
                </div>

            </div>
        )
    }
    componentDidMount(){
        // this.props.upSearchList()
    }
}


function mapStateToProps(state) {
    // console.log(state)
    return {
        searchList:state.searchList.searchList,
        pageNo:state.searchList.pageNo,
    }
}
function mapDispatchToProps(dispatch) {
    return {
        upSearchList(val) {
            dispatch(searchActionCreator.upSearchList.call(this,val))
        },
       

    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Search)