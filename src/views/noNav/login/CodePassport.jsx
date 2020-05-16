import React, { Component } from 'react'
import {
    NavLink,
    withRouter
}from "react-router-dom"
import iconOfLogin from '../../../assets/img/login/iconOfJuooo.png'
import qq from '../../../assets/img/login/qq.png'
import weibo from '../../../assets/img/login/weibo.png'
import snow from '../../../assets/img/login/snow.jpg'
import {
    LeftOutlined, FileExcelFilled
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
                            {/* 输入手机号部分 */}
                            <div style={{display:'flex',alignItems:'center',borderBottom:'1px solid #999999',justifyContent:'center'}}>
                                <span style={{color:'#FF6743',fontSize:'16px',paddingRight:'8px',fontFamily:'"Avenir", Helvetica, Arial, sans-serif'}}>+86</span>
                                <input type="text" name="userName" placeholder="请输入手机号" style={{margin:'0'}}/>
                            </div>
                            {/* 输入验证码部分 */}
                            <div style={{borderBottom:'1px solid #999999'}}>
                                <input type="text" name="passWord" placeholder="请输入数字验证码"/>
                                {/* 这里显示随机生成的 4 位验证码 */}
                                <i id="the_i" className={style.the_i} style={{height:'30px',textAlign:'center',lineHeight:'30px',display:'inline-block',width:'70px',position:'absolute',right:'32px',top:'235px',backgroundSize:'cover'}} onClick={this.changeNum.bind(this)}>345612</i>
                            </div>
                            {/* 提示未注册手机号注册会员 */}
                            <p style={{paddingTop:'15px',color:'#999999',fontSize:'12px'}}>未注册的手机号将自动创建会员账号</p>
                            <button type="button" name="submit" value="登录" className={style.submit} style={{letterSpacing:'0'}}>获取短信验证码</button>
                        </form>
                        {/* forget password */}
                        <div className={style.others}>
                            <span style={{float:'left'}}>邮箱注册</span>
                            <NavLink to={'/passport/login'}>
                            <span style={{float:'right',color:'#666666'}}>密码登录</span>
                            </NavLink>
                        </div>
                    </div>
                    {/* 其他登录方式 */}
                    <div className={style.othersLogin}>
                        <p className={style.othersLogin_p}>
                            <span className={style.othersLogin_span}>
                                <span className={style.line} style={{borderTop:'1.5px solid #bbb'}}></span>
                                    <i style={{margin:'0 14px',verticalAlign:'-4px',fontStyle:'normal'}}>其他登录方式</i>
                                <span className={style.line} style={{borderTop:'1.5px solid #bbb'}}></span>
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


    back(){
        this.props.history.go(-1)
    }

    changeNum(){
        let the_i = document.getElementById('the_i')
        var res = Math.floor(Math.random() * 900000) + 100000
        the_i.innerText = res
    }
}

export default withRouter(Passport)
