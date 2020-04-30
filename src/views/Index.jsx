import React, { Component } from 'react'
import {
    NavLink,
  
  } from 'react-router-dom'

import MyRouter from '../components/common/MyRouter'

export default class Index extends Component {
    render() {
        return (
            <div>
                <nav>
                    <NavLink to={'/'}>首页</NavLink>
                    <NavLink to={'/theatre/theatreList'}>剧院列表页</NavLink>
                    <NavLink to={'/eticket/list'}>票夹页</NavLink>
                    <NavLink to={'/myjuooo/myjuooo'}>我的</NavLink>
                </nav>
                <MyRouter router={this.props.childrens}></MyRouter>
            </div>
        )
    }
}
