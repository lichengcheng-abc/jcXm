import React, { Component } from 'react'
import {
    NavLink,
    withRouter
}from "react-router-dom"
import iconOfLogin from '../../../assets/img/login/iconOfJuooo.png'
import qq from '../../../assets/img/login/qq.png'
import weibo from '../../../assets/img/login/weibo.png'
import eye from '../../../assets/img/login/eye.png'
import eyeopen from '../../../assets/img/login/eyeopen.png'
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
                    <div className={style.header} onClick={this.back.bind(this)}>
                        <LeftOutlined/>
                    </div>
                    {/* logo部分及登录框 */}
                    <div className={style.passport_body}>
                        {/* logo of login */}
                        <div className={style.icon}>
                            <img src={iconOfLogin} alt=""/>
                        </div>
                        {/* 表单部分 */}
                        <form action="###" className={style.formStyle}>
                            <input type="text" name="userName" placeholder="请输入手机号/邮箱" style={{margin:'0',borderBottom:'1px solid #999999'}}/>
                            <input type="password" name="passWord" placeholder="请输入密码" id="passWord" style={{borderBottom:'1px solid #999999'}}/>
                            <i className={style.back_eye_img} style={{backgroundSize:'cover'}} onClick={this.showhide.bind(this)} id="back_img"></i>
                            {/* <img src={eye} alt="fail" style={{width:'20px',position:'absolute',top:'240px',right:'36px'}} onClick={this.showhide.bind(this)}/>
                            <img src={eyeopen} alt="fail" style={{width:'20px',position:'absolute',top:'240px',right:'36px',display:'none'}}/> */}
                            <button type="button" name="submit" value="登录" className={style.submit}>登录</button>
                        </form>
                        {/* forget password */}
                        <div className={style.others}>
                            <span style={{float:'left'}}>忘记密码</span>
                            <NavLink exact to={'/passport/codelogin'}>
                            <span style={{float:'right',color:'#666666'}}>验证码登录/注册</span>
                            </NavLink>
                        </div>
                    </div>
                    {/* 其他登录方式 */}
                    <div className={style.othersLogin}>
                        <p className={style.othersLogin_p}>
                                <span className={style.line} style={{borderTop:'1.5px solid #bbb'}}></span>
                                    <i style={{verticalAlign:'-4px',fontStyle:'normal',margin:'0 14px',boxSizing:'border-box'}}>其他登录方式</i>
                                <span className={style.line} style={{borderTop:'1.5px solid #bbb'}}></span>
                        </p>
                        {/* qq/weibo */}
                            <div className={style.othersImg}>
                                <img src={qq} alt="图片加载失败"/>
                                <img src={weibo} alt="图片加载失败"/>
                            </div>
                    </div>
                </div>
            </div>
        )
    }

    showhide(){
        let passWordInp = document.getElementById('passWord')
        let back_img = document.getElementById('back_img')
        if(passWordInp.type == 'password'){
            passWordInp.type = "text"
            back_img.className = 'login_back_eye_img_open__2Dh8y'
        }else{
            passWordInp.type = 'password'
            back_img.className = 'login_back_eye_img__5I71z'
        }
    }

    back(){
        this.props.history.go(-1)
    }
}

export default withRouter(Passport)
