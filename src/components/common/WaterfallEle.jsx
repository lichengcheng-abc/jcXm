import React, { Component } from "react";
import { withRouter } from "react-router-dom"
import style from "../../assets/css/component/waterfallEle.module.css";

class WaterfallEle extends Component {
    render(){
        return (
            <React.Fragment>
                {/* 大区域 */}
                <div className={style.ele_distance}>
                    {/* 图片区 */}
                    <div className={style.recommend_img}>
                        <img src={this.props.pic} alt=""/>
                        <span className={style.recommend_tip}>
                            {/* 城市 */}
                            {this.props.city_name}
                        </span>
                    </div>
                    {/* 标题 */}
                    <div className={style.recommend_title}>
                        <div className={style.sponsor}>
                            {/* 主办图表是否显示 */}
                            <img 
                                style={{display:this.props.method_icon? "block" : "none",verticalAlign:'top'}}
                                src={this.props.method_icon} 
                                alt=""
                            />
                            <p
                                style={{textIndent: this.props.method_icon? "38px" : "0"}}
                            >{this.props.name}</p>
                        </div>
                        {/* 时间 */}
                        <p className={style.sponsor_time}>{this.props.end_show_time}</p>
                        {/* 价钱 */}
                        <div className={style.sopnsor_prince}>
                            <span>￥{this.props.min_price}</span>
                            <span>起</span>
                        </div>
                        <div className={style.sopnsor_service}>
                            {this.props.support_desc.map((item) => (
                                <span key={Math.random() * 100 +2}>{item}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default withRouter(WaterfallEle);