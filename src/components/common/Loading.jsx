import React, { Component } from 'react'

export default class Loading extends Component {
    render() {
        return (
            <div>
                <img src={require('../../assets/img/loading.c125a1d.gif')} 
                style={{width:'80px',height:'100px',marginLeft:'160px',marginTop:'200px'}} alt=""/>
            </div>
        )
    }
}
