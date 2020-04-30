import React, { Component } from 'react'
import {Route,Switch} from 'react-router-dom'
import GuardRouter from "./GuardRouter";

export default class MyRouter extends Component {
    render() {
        return (
            <div>
                 <Switch>
                    
                {
                    this.props.router.map((v) => (

                        
                    <Route path={v.path} exact={v.exact}  render={()=><GuardRouter  {...v}/>} key={v.path} ></Route>

                    ))
                   
                }
                 
                  </Switch>
                
            </div>
        )
    }
}
