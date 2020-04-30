import React, { Component } from 'react'
import {
    withRouter
} from "react-router-dom"


 class GuardRouter extends Component {
    render() {
        return (
            <div>
               <this.props.component {...this.props}/>
               
            </div>
        )
    }
    // componentWillMount(){
        
    //         if(this.props.isAuthorization){
    //             //  这里对登录的权限可以在这里进行使用
    //             if(!localStorage.userName){
    //                     this.props.history.push('/login')
    //             }else{
    //                 console.log( 1111 )
    //             }
    //         }
    // }
}

export default withRouter(GuardRouter)