import React from "react";
import {NavLink} from 'react-router-dom'
import style from "../../views/zjcss/myjuooo/myjuooo.module.css"
export default class MyjuoooMine extends React.Component {
    // constructor() {
    //     super()
    // }


    render() {
        return (
            <div className={style.myjuooo_btm}>
                <span className={style.myjuooo_btm_num}>0</span>
                <div className={style.MyjuoooMine}><NavLink to={this.props.to}>{this.props.msg}</NavLink></div>
            </div>
        )
    }
}










