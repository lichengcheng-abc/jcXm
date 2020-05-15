import React from 'react'
import {SettingOutlined} from '@ant-design/icons';
import {
    NavLink,
    withRouter
} from 'react-router-dom';
import style from './zjcss/myjuooo/myjuooo.module.css'
import MyjuoooMine from '../components/myjuooo/MyjuoooMine'
import MyjuoooMy from '../components/myjuooo/MyjuoooMy'
import myjuooovippic from '../assets/img/myjuooo/myjuooo_vip.png'
import order from '../assets/img/myjuooo/Myjuooo_order.png'
import ticketholder from '../assets/img/myjuooo/Myjuooo_ticketholder.png'
import cardpackage from '../assets/img/myjuooo/Myjuooo_cardpackage.png'
import people from '../assets/img/myjuooo/Myjuooo_people.png'
import address from '../assets/img/myjuooo/Myjuooo_address.png'
import feedback from '../assets/img/myjuooo/Myjuooo_feedback.png'
import help from '../assets/img/myjuooo/Myjuooo_help.png'

 class Myjuooo extends React.Component {
    render() {
        return (
            <div className={style.ccc}>
            <div className={style.myjuooo}>
                {/* 头部 */}
                <div className={style.myjuooo_top}>
                    {/* 设置 */}
                    <NavLink className={style.myjuooo_set} activeStyle={{color:"red"}} exact to={"Myjuooo/mysecurity"}> <div className="icons-list"><SettingOutlined/></div> </NavLink>
                    {/* 大白快 */}
                    <div className={style.myjuooo_me}>
                        {/* 头像及信息部分 */}
                        <div className={style.myjuooo_metop}>
                            <NavLink  to={"/passport/login"} style={{color:'#111'}}>
                            <div className={style.myjuooo_mypic}></div>
                            <span className={style.myjuooo_myname}>登录/注册</span>
                            <span className={style.myjuooo_myid} style={{color:'#999'}}>请点击登录 ></span>
                            </NavLink>
                        </div>
                        {/* 会员 */}
                        <span className={style.myjuooo_myvip}>普通会员</span>
                        {/* 四小块 */}
                        <div className={style.myjuooo_bottom}>
                            <MyjuoooMine  to={"/Myjuooo/mymoney"} msg={"账户余额"} ></MyjuoooMine>
                            <span className={style.myjuooo_btm_rline}></span>
                            <MyjuoooMine  to={"/Myjuooo/myintegral"} msg={"积分"} ></MyjuoooMine>
                            <span className={style.myjuooo_btm_rline}></span>
                            <MyjuoooMine  to={"/Myjuooo/couponExchange"} msg={"优惠券"} ></MyjuoooMine>
                            <span className={style.myjuooo_btm_rline}></span>
                            <div className={style.myjuooo_btm_msg}>
                                <p className={style.myjuooo_btm_opennow}>立即开通</p>
                                <p>橙PLUS卡</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* VIP */}
                <div className={style.myjuooo_vip}>
                        <img src={myjuooovippic} alt="未找到图片,点击重新加载"/>
                    </div>
                    {/* 我的功能 */}
                    <div className={style.myjuooo_mine_box}>
                        <MyjuoooMy src={order} msg={"我的订单"} to={"/my/myOrderList"}></MyjuoooMy>
                        <MyjuoooMy src={ticketholder} msg={"我的票夹"} to={"/eticket/list"}></MyjuoooMy>
                        <MyjuoooMy src={cardpackage} msg={"我的卡包"} to={"/Cardproduct/index"} ></MyjuoooMy>
                        <div className={style.myjuooo_my}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
                    </div>
                    <div className={style.myjuooo_mine_box}>
                        <MyjuoooMy src={people} msg={"实名购票人"} to={"/Myjuooo/myRealNameCertification"}></MyjuoooMy>
                        <MyjuoooMy src={address} msg={"收货地址"} to={"/myjuooo/myaddress"}></MyjuoooMy>
                        <MyjuoooMy src={feedback} msg={"意见反馈"} to={"/feedback/index"} ></MyjuoooMy>
                        <div className={style.myjuooo_my}>
                            <img src={help} alt="图片加载失败,点击重新加载"/>
                            <div className={style.myjuooo_my_msg}>在线客服</div>
                        </div>
                    </div>
            </div>
            </div>
      )
    }
}

export default withRouter(Myjuooo)
