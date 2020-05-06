import React,{Component} from 'react';
import Group from './Group';
import {
    Route,
    NavLink
} from 'react-router-dom';
import MyGroup from './Mygroup';
export default class Index extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div>
                <Route path={'/activity/group'} component={Group}></Route>
                <Route path={'/mygroup'} component={MyGroup}></Route>
                <nav style={{height:"88px",
                            display:'flex',
                            justifyContent:'space-around',
                }} >
                    <NavLink style={{color:'red'}} to={'/activity/group'}>拼团</NavLink>
                    <NavLink to={'/mygroup'}>我的团</NavLink>
                </nav>
            </div>
        )
    }
}