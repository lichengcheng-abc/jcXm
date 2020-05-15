import React, { Component } from 'react'
import style from '../../zjcss/search/search.module.css'
import searchActionCreator from '../../../store/actionCreator/search'
import { connect } from 'react-redux'
class Search extends Component {
    constructor() {
        super()
        this.rewaterfall = null;
        this.reLeft = null; //瀑布流左边元素
        this.reRight = null; //瀑布流右边元素
        this.switch = false; //防止瀑布流请求过快  开始关闭 因为组件加载时会调用一次

        this.state = {
            ele: '',
            waterfallLeft: [],
            waterfallRight: [],
            pageNo: 1,

          
            show:null,

            historySearch:false,
            historyArr:[],
            // historyArr:localStorage.search,
           

        }
    }
    render() {


        const pubu = 
        <div style={{display:'flex',flexDirection:'column',marginTop: '60px'}}>

<div ref={(el) => (this.rewaterfall = el)} style={{ marginLeft: '10px', marginTop: '10px' }}>
            <div ref={(el) => (this.reLeft = el)} style={{ width: '166px', float: 'left', marginRight: '10px' }} >
                {

                    this.state.waterfallLeft.map((v, index) => (

                        <h6 key={index}
                            style={{ position:'relative',width: '169px', height: '340px', marginBottom: '5px', border: '1px solid #e4e4e5', borderRadius: '10px' }}
                            onClick={() => {
                                this.props.history.push('/ticket/' + v.schedular_id)
                            }}
                        >

                 <span style={{position:'absolute',right:'5px',top:'5px',color:'#ffffff',backgroundColor:'black',opacity:'0.8'}}>{v.city_name}</span>
                            <img src={v.pic} alt="" style={{ width: '169px', borderRadius: '5px' }} />
                            <span key={index} style={{ width: '169px', display: 'flex', flexDirection: 'column', marginBottm: '2px' }}>
                                <h6>
                                    <span
                                        style={{ fontStyle: 'normal', fontSize: "10px", color: "#ffffff", padding: '0px 5px', height: '32px', background: '#ff6051', borderRadius: '5px' }}>
                                        主办</span>
                                    <span style={{ fontStyle: 'normal' }}>{v.name.slice(0, 9)}</span>
                                </h6>
                                <h6>{v.name.slice(9, 20)}</h6>
                                <h6>2020{v.show_time_top} </h6>
                                <h6>
                                    <span style={{ color: 'red' }}>¥ {v.min_price} </span>
                                    <span>起</span>

                                </h6>
                                <h6>
                                    <span style={{ fontSize: "10px", color: "red", padding: '0px 5px', height: '32px', background: '#fff1ef', borderRadius: '5px' }}>电子票</span>
                                    <span style={{ fontSize: "10px", color: "red", padding: '0px 5px', height: '32px', background: '#fff1ef', borderRadius: '5px' }}>可选座</span>
                                </h6>
                                <h6 style={{ fontSize: "10px", width: '60px', color: "red", padding: '0px 5px', height: '16px', background: '#fff1ef', borderRadius: '5px' }}>限时8折起</h6>
                            </span>

                        </h6>






                    ))
                }


            </div>
            <div ref={(el) => (this.reRight = el)} style={{ width: '166px', height: '200px', float: 'left', marginRight: '8px' }}>
                {

                    this.state.waterfallRight.map((v, index) => (

                        <h6 key={index}
                            style={{
                                width: '169px', height: '360px', marginBottom: '10px',
                                border: '1px solid #e4e4e5', borderRadius: '5px',position:'relative'
                            }}
                            onClick={() => {
                                this.props.history.push('/ticket/' + v.schedular_id)
                            }}
                        >
                            <span style={{position:'absolute',right:'5px',top:'5px',color:'#ffffff',backgroundColor:'black',opacity:'0.8'}}>{v.city_name}</span>
                            <img src={v.pic} alt="" style={{ width: '169px', borderRadius: '5px' }} />
                            <span key={index} style={{ width: '169px', display: 'flex', flexDirection: 'column', marginBottm: '2px' }}>
                                <h6>
                                    <span
                                        style={{ marginTop: '5px', fontStyle: 'normal', fontSize: "10px", color: "#ffffff", padding: '0px 5px', height: '32px', background: '#ff6051', borderRadius: '5px' }}>
                                        主办</span>
                                    <span style={{ fontStyle: 'normal' }}>{v.name.slice(0, 9)}</span>
                                </h6>
                                <h6>{v.name.slice(9, 20)}</h6>
                                <h6>2020{v.show_time_top} </h6>
                                <h6>
                                    <span style={{ color: 'red' }}>¥ {v.min_price} </span>
                                    <span>起</span>

                                </h6>
                                <h6>
                                    <span style={{ fontSize: "10px", color: "red", padding: '0px 5px', height: '32px', background: '#fff1ef', borderRadius: '5px' }}>电子票</span>
                                    <span style={{ fontSize: "10px", color: "red", padding: '0px 5px', height: '32px', background: '#fff1ef', borderRadius: '5px' }}>可选座</span>
                                </h6>
                                <h6 style={{ fontSize: "10px", width: '30px', color: "red", padding: '0px 5px', height: '16px', background: '#fff1ef', borderRadius: '5px' }}>套票</h6>
                                <h6 style={{ fontSize: "10px", width: '60px', color: "red", padding: '0px 5px', height: '16px', background: '#fff1ef', borderRadius: '5px' }}>限时8折起</h6>
                            </span>

                        </h6>
                    ))



                }

            </div>
        </div>
        {
              
                <div style={{widht:'200px',marginLeft:'150px',marginTop:'20px',color:'grey',marginBottom:'10px'}}>
                    没有更多了
                  </div>
                  
            
        }     

        </div> 
       
//        const remen = 

//        <div style={{marginLeft:'30px',marginTop: '80px',}}>
//        <div>热门搜索</div> 
//        <div style={{width:'280px',display:'flex',flexWrap:'wrap'}} className={style.hot}>
           
//            {
//               this.props.hotSearch.map((v,index)=>(
//               <span key={index} 
//               style={{paddingTop:'15px',paddingLeft:'10px',borderSizeing:'border-box',marginTop:'10px'}}
//               onClick={() => {
//                 this.props.upSearchList.call(this,v.word)
              
//             }}
//               >{v.word}</span>
//            ))
//            }
           
          
//        </div>  
//    </div>

const historySearch =(
    <div>
         <div>
    <span>历史搜索</span>  
    <img src={require('../../../assets/img/home/clear.e4a5ee4.png')} 
    style={{width:'20px',height:'20px',marginLeft:'250px'}} 
    onClick={()=>{
        this.setState({
           historySearch:false
        })
        this.state.historyArr=[]
        localStorage.search = JSON.stringify(this.state.historyArr)
    }} alt=""/>
</div> 
<div style={{width:'280px',display:'flex',flexWrap:'wrap'}} className={style.hot}>
  {
      this.state.historyArr.length>0?
      (
        
             JSON.parse(localStorage.search).map((v,index)=>(
     <span key={index} 
     style={{paddingTop:'15px',paddingLeft:'10px',borderSizeing:'border-box',marginTop:'10px'}}
     onClick={() => {
       this.props.upSearchList.call(this,v)
      
     
   }}
     >{v}</span>
  ))
  
      
      )
      :''
  }
 

  
 
</div>
    </div>

     )

                const remen = 

       <div style={{marginLeft:'30px',marginTop: '50px',}}>

      {

          this.state.historySearch?
          

          historySearch
         
        
            :''
      }
          



       <div style={{marginTop:'50px'}}>热门搜索</div> 
       <div style={{width:'280px',display:'flex',flexWrap:'wrap'}} className={style.hot}>
           
           {
              this.props.hotSearch.map((v,index)=>(
              <span key={index} 
              style={{paddingTop:'15px',paddingLeft:'10px',borderSizeing:'border-box',marginTop:'10px'}}
              onClick={() => {
                this.props.upSearchList.call(this,v.word)
              
            }}
              >{v.word}</span>
           ))
           }
           
          
       </div>  
   </div>




        return (
            <div style={{display:'flex',flexDirection:'column'}}>

                <div style={{ display: 'flex', height:'40px',width:'100%',marginBottom: '20px' ,position:'fixed',top:0,backgroundColor: '#ffffff'}}>
                    <span className={style.ss}
                        style={{ width: '300px', height: '30px', border: '1px solid #e4e4e5', borderRadius: '40px', backgroundColor: '#f5f5f5' }}>
                        <img src={require('../.././../assets/img/home/2.png')} style={{ width: '19px', height: '19px', marginLeft: '10px' }} alt="" />
                        <input type={'text'}
                            style={{ color: 'grey', marginLeft: '10px', border: 'none', outline: 'medium', backgroundColor: '#f5f5f5' }}
                            placeholder={'搜索热门演出'}
                            ref={(e) => {
                                this.ele = e
                            }}
                            onInput={() => {

                                this.setState({
                                    show:1,
                                })
                                // 框里只要是有新增内容就有请求 不看光标的
                                // console.log(this.ele.value)
                                // console.log(this)
                                // console.log(this.ele.value)
                                if (this.ele.value.length !== 0) {
                                    var reg = /^[\u4e00-\u9fa5]+$/;
                                    if (reg.test(this.ele.value)) {
                                        // 这个正则是判断的用户输入的内容得是全中文时才发送请求
                                        // 当你输英文时不给发送请求
                                        // console.log(this.ele.value)
                                        this.props.upSearchList.call(this, this.ele.value)
                                    }


                                } else {
                                    // console.log(123)
                                    this.setState({
                                        waterfallLeft: [],
                                        waterfallRight: [],
                                    })
                                }


                            }}
                        />



                        <img src={require('../.././../assets/img/home/x.png')}
                            style={{ width: '19px', height: '19px', marginLeft: '60px', fontSize: '50px' }} alt="" onClick={() => {
                                this.ele.value = null
                                this.setState({
                                    waterfallLeft: [],
                                    waterfallRight: [],
                                })

                            }} />
                    </span>
                    <span style={{ color: 'grey', marginLeft: '10px', marginTop: '10px' }}
                        onClick={() => {
                            this.props.history.push('/')
                            this.setState({
                                waterfallLeft: [],
                                waterfallRight: [],
                            })
                        }}>
                        取消
                  </span>
                </div>



                {/* {瀑布流部分} */}

                {/* {瀑布流部分} */}

                {/* {热门搜索} */}
              
                   
                  
                {/* {热门搜索} */}


                {
                    this.state.waterfallLeft.length>0? pubu: remen
                         
                   
                }
             
               

            </div>
        )
    }
    componentDidMount() {
        // 有滚动条监听事件 
        window.onscroll = () => {
            let maxScrollHeight =
                document.documentElement.scrollTop || document.body.scrollTop; //浏览器卷去的高度 body 实际高度
            let clientHeight =
                document.documentElement.clientHeight || document.body.clientHeight; // 屏幕的高度 视口高度 

            // //假设左边盒子高度最小
            let minDefaultDiv = this.reLeft;

            if (minDefaultDiv) {
                let minDefaultHeight = this.reLeft.scrollHeight;
                // waterfallEle.forEach()
                if (this.reLeft.scrollHeight > this.reRight.scrollHeight) {
                    minDefaultHeight = this.reRight.scrollHeight;
                }
                if (maxScrollHeight + clientHeight > minDefaultHeight) {
                    // 网页可见区域高：document.body.clientHeight

                    // 网页正文全文高：document.body.scrollHeight  老师解释的就是 当该元素把页面填充满时就是全文的高
                    // 网页可见区域高（包括边线的高）：document.body.offsetHeight
                    // 网页被卷去的高：document.body.scrollTop
                    // 屏幕分辨率高：window.screen.height

                    // 这个就是浏览器卷去的高度 加上屏幕的高度 大于此时的  最短的此时的它的高度 网页正文全文高：document.body.scrollHeight

                    //   这个开关的设置是 就是只有是true的时候是 才可以是再次请求数据 然后设置是在actionCreater的调取完数据
                    //   此时把值改变成true 即该次的数据请求完了才可以请求下页的数据 即是之前老师讲过的就是比如此时有短的出现了
                    // 若此时数据还没回来的话 此时会不断请求 所以就死让它这次的数据请求完才可以请求下一页的数据

                    if (this.switch) {
                        //    这里只能在这里改变页数 不能在store 因为这个引发请求的事件会一直有进行的 不能说变一个搜索词就改变这个页数
                        this.setState({
                            pageNo: this.state.pageNo + 1
                        })
                        // console.log(  this.state.pageNo)
                        this.switch = false; //满足条件时 先关闭开关  获取数据异步程序

                        this.props.upSearchList.call(this, this.ele.value)


                    }
                }
            }
        }

    }


    componentDidMount(){
      
        this.props.upHotSearchList()
       
    }
}


function mapStateToProps(state) {

    return {
        searchList: state.searchList.searchList,
        hotSearch:state.hotSearch.hotSearchList    
    }
}
function mapDispatchToProps(dispatch) {
    return {
        upSearchList(val) {

            dispatch(searchActionCreator.upSearchList.call(this, val))
        },

        upHotSearchList() {

            dispatch(searchActionCreator.upHotSearchList())
        },



    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Search)