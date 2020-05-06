import React, { Component } from 'react'
import {
    NavLink,
    withRouter
}from "react-router-dom"
import iconOfLogin from '../../../assets/img/login/iconOfJuooo.png'
import qq from '../../../assets/img/login/qq.png'
import weibo from '../../../assets/img/login/weibo.png'
import {
    LeftOutlined
} from '@ant-design/icons';
import axios from 'axios';
import style from '../../zjcss/login/login.module.css'


 class Passport extends Component {
    render() {
        return (
            <div>
                <div>
                    {/* 头部 */}
                    <div className={style.header}>
                        <LeftOutlined/>
                    </div>
                    {/* logo部分及登录框 */}
                    <div className={style.passport_body}>
                        {/* logo of login */}
                        <div className={style.icon}>
                            <img src={iconOfLogin} alt=""/>
                        </div>
                        {/* 表单部分 */}
                        <Demo />
                        {/* forget password */}
                        <div className={style.others}>
                            <span style={{float:'left'}}>忘记密码</span>
                            <span style={{float:'right'}}>验证码登录/注册</span>
                        </div>
                    </div>
                    {/* 其他登录方式 */}
                    <div className={style.othersLogin}>
                        <p className={style.othersLogin_p}>
                            <span className={style.othersLogin_span}>
                                <hr className={style.hrline}/>
                                    <i style={{margin:'0 8px'}}>其他登录方式</i>
                                <hr className={style.hrline}/>
                            </span>
                        </p>
                        {/* qq/weibo */}
                        <div className={style.footer}>
                            <div className={style.othersImg}>
                                <img src={qq} alt="图片加载失败"/>
                                <img src={weibo} alt="图片加载失败"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
  
  const Demo = () => {
    return (
      <form action="###" className={style.formStyle}>
          <input type="text" name="userName" placeholder="请输入手机号/邮箱" style={{margin:'0'}}/>
          <input type="password" name="passWord" placeholder="请输入密码"/>
          <button type="button" name="submit" value="登录" className={style.submit}>登录</button>
      </form>
    );
  };
  

export default withRouter(Passport)
