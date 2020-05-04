import React, { Component } from 'react';
import style from '../../zjcss/pointMall/pointMall.module.css';

export default class PointsMall extends Component {
    render() {
        return (
            <div>
                <div className={style.header}>
                    <span onClick={()=>{this.props.history.go(-1)}} >{"<"} </span>
                    <span>积分兑换</span>
                    <hr/>
                </div>

                <div className={style.pointImg}>
                    <img src={require('../../../assets/img/point/point.png')} />
                    <p>暂无积分兑换</p>
                </div>
            </div>
        )
    }
}
