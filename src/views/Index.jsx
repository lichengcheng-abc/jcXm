import React, { Component } from 'react'
import {
    NavLink,


} from 'react-router-dom'

// import style from './zjcss/theatreList/theatreList.module.css'
import MyRouter from '../components/common/MyRouter'

import style from './zjcss/home/home.module.css'
// const style ={
//     foot:{

//        position:'fixed',
//        bottom:0,

//        display:'flex',

//        justifyContent:'space-between',




//     },

// }



export default class Index extends Component {
    render() {
        return (
            <div>
             
                <MyRouter router={this.props.childrens}></MyRouter>
              

                <nav className={style.foot}>
                    <NavLink to={'/'} >
                        {
                            (this.props.location.pathname=== '/'?
                            <img src={require('../assets/img/home/ft1.png')} style={{ width: '42px', height: '42px' }} alt="" />
                            :
                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <img src={require('../assets/img/home/ft5.png')} style={{ width: '30px', height: '30px', }} alt="" />
                            <span style={{ color: 'black', marginLeft: '3px', fontWeight: 'bold' }}>首页</span>
                            </div>
                            )
                        }
                       

                    </NavLink>
                    <NavLink to={'/theatre/theatreList'} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                       {
                           ( this.props.location.pathname=== '/theatre/theatreList'?
                           <img src={require('../assets/img/home/ft6.png')} style={{ width: '30px', height: '30px', }} alt="" />
                           :
                           <img src={require('../assets/img/home/ft2.png')} style={{ width: '30px', height: '30px', }} alt="" />
                           )
                       }
                       
                       
                      
                        <span style={{ color: 'black', marginLeft: '3px', fontWeight: 'bold' }}>剧院</span>
                    </NavLink>
                    <NavLink to={'/eticket/list'} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        {
                            ( this.props.location.pathname=== '/eticket/list'?
                            <img src={require('../assets/img/home/ft7.png')} style={{ width: '30px', height: '30px', }} alt="" />
                            :
                            <img src={require('../assets/img/home/ft3.png')} style={{ width: '30px', height: '30px', }} alt="" />
                            )
                        }
                        
                        
                        <span style={{ color: 'black', marginLeft: '3px', fontWeight: 'bold' }}>票夹</span>
                    </NavLink>
                    <NavLink to={'/myjuooo/myjuooo'} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                         {
                            ( this.props.location.pathname=== '/myjuooo/myjuooo'?
                            <img src={require('../assets/img/home/ft8.png')} style={{ width: '30px', height: '30px', }} alt="" />
                            :
                            <img src={require('../assets/img/home/ft4.png')} style={{ width: '30px', height: '30px', }} alt="" />
                            )
                        }
                        
                      
                        <span style={{ color: 'black', marginLeft: '3px', fontWeight: 'bold' }}>我的</span>
                    </NavLink>
                </nav>

            </div>
        )
    }

    componentDidMount(){
        // console.log(this.props)
    }
}
