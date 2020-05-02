import React, { Component } from 'react';
import style from '../../zjcss/tourShow/tourShow.module.css';
import axios from 'axios';

export default class TourShowinfo extends Component {
    constructor(props){
        super(props);
        this.state = {
            city:'',
            show:'',
            time:'',
            showList:[]
        }
    }
    render() {
        console.log(this.state)
        const yanchuList = this.state 
        // if(yanchuList.city!=''&&yanchuList.show!=''&&yanchuList.time!=''&&yanchuList.showList.length!=0){
        //     console.log('11111111111111111111',yanchuList)
       
            return (
                <div>
                    <div id={style.detail}>
                        <div className={style.header}>
                            <i></i>
                            <span>演出详情</span>
                            <i></i>
                        </div>
                        <div className={style.pro}>
                            <p><img src=""/></p>
                            <div>
                                <p className={style.city}>hhhhhhh </p>
                                <p className={style.show}>6个城市 </p>
                                <p className={style.price}>时间</p>
                            </div>
                        </div>
                    </div>

                    <div id={style.music}>
                        <ul>
                            <li>
                                <div className={style.time}>
                                    <span>09/</span> 
                                    <span>11-13</span>
                                </div>
                                <div className={style.des}>
                                    <p>音乐剧</p>
                                    <p>地址</p>
                                    <p>价格</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            )

        // }else{
        //     console.log('2222222222222222',yanchuList)
        // }

    }
    async getShowList(){
        // const id = this.props.match.params;
        const {data} = await axios.get('/show/tour/getInfo',{
            params:{
                id:2
            }
        })
        console.log(data,data.city_num)
        this.setState({
            city:data.name,
            show:data.city_num,
            time:data.start_time+'-'+data.end_time,
            showList:data.list
        })
        console.log(3333333333333333,this.state)
    }
    //https://api.juooo.com/show/tour/getInfo?id=2
    async componentDidMount(){
        this.getShowList()
    }
}
