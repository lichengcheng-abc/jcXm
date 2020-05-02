import React, { Component } from 'react'
import {
    NavLink,
  
  } from 'react-router-dom'
  import style from './zjcss/theatreList/theatreList.module.css'
import MyRouter from '../components/common/MyRouter'
// const style ={
//     foot:{

//        position:'fixed',
//        bottom:0,
//     //    这里的布局未生效
//        display:'flex',
       
//        justifyContent:'space-around',


//     }
// }

export default class Index extends Component {
    render() {
        return (
            <div>    
                <MyRouter   router={this.props.childrens}></MyRouter>                        
                <nav className={style.footer}>
                    <NavLink to={'/'}>首页</NavLink>
                    <NavLink to={'/theatre/theatreList'}>剧院列表页</NavLink>
                    <NavLink to={'/eticket/list'}>票夹页</NavLink>
                    <NavLink to={'/myjuooo/myjuooo'}>我的</NavLink>
                </nav>
                 
            </div>
        )
    }
}
