import React from "react";
import {NavLink} from 'react-router-dom'
import style from "../../views/zjcss/myjuooo/myjuooo.module.css"
export default class MyjuoooMy extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div className={style.myjuooo_my}>
                <img src={this.props.src}/>
                <div className={style.myjuooo_my_msg}><NavLink to={this.props.to}>{this.props.msg}</NavLink></div>
            </div>
        )
    }
}






