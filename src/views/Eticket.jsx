import React, { Component } from 'react'

import style from './zjcss/eticket/eticket.module.css'
export default class Eticket extends Component {
    render() {
        return (
            <div>
                <div className={style.header}>
                    <span style={{ marginLeft: '160px', fontSize: '18px' }}>票夹</span>
                    <span style={{ marginLeft: '140px', fontSize: '30px', marginTop: '5px' }}>...</span>
                </div>
                <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                    <img src={require('../assets/img/eticket/1.png')} style={{ width: '109px', hetght: '77px' ,marginTop:'150px'}} alt="" />
                    <span style={{color:'#c9c9c9',marginTop:'20px'}}>暂无电子票</span>
                    <span 
                    style={{color:'#ffffff',width:'145px',marginTop:'50px',fontSize:'16px',
                    height:'35px',backgroundColor:'#ff8b38',borderRadius:'40px',textAlign:'center',lineHeight:'35px'}}
                    onClick={()=>{
                        this.props.history.push('/passport/login?return_url=https%3A%2F%2Fm.juooo.com%2Feticket%2Flist')
                    }}
                    >登录</span>
                </div>

            </div>
        )
    }
    componentDidMount(){
        // 让开始的高度为0
        document.documentElement.scrollTop = document.body.scrollTop =0;
    }
}
