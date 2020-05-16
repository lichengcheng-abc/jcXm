import React from 'react';
import style from './style.module.css'
import {withRouter} from 'react-router-dom'
import more from '../../assets/img/theater/more.2ce7873.png'
import ReactDom from 'react-dom'
class HeaderCard extends React.Component {
constructor() {
    super();
    this.state = {
        dateSelected:false,
    }
}
handleMask=()=>{
        
    this.setState({
       dateSelected: !this.state.dateSelected
    })
}

    render() {
        return (
        <div>
            <header className={style.header}>
                    <i className={style.back}
                    onClick={()=>{
                        this.props.history.go(-1)
                    }}
                    >&lt;</i>
                    <h3 className={style.header_h3}>{this.props.children}</h3>
                    <img className={style.more} src={more} alt="" 
                    onClick={()=>{
                        this.handleMask()
                    }}
                    />
                    
                </header>
                <div 
                    className={this.state.dateSelected ? style.select : style.disSelect }
                    >
                        <span
                        onClick={()=>{
                            this.props.history.push('/myjuooo/myjuooo')
                            // console.log(78787)
                        }}
                        >我的聚橙</span>
                        <span
                        onClick={()=>{
                            this.props.history.push('/')
                            // console.log(11111)
                        }}
                        >主页</span>
                    </div>
                    <div 
                        onClick={()=>{
                            this.handleMask()
                        }}
                        className={this.state.dateSelected ? style.mask : style.dismask } 
                    ></div>
        </div>
        );
    }

}

export default withRouter(HeaderCard);