import React, { Component } from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import style from '../navCss/CardproductIndex.module.css'
import more from '../../../assets/img/theater/more.2ce7873.png'
import cartCreator from '../../../store/actionCreator/CardproductIndex'
import Loading from '../../../components/common/Loading'
class CardproductIndex extends Component {
    constructor() {
        super();
        this.state = {
            currentIndex: 0,
            isloading:true,
            btn:['购买新卡','绑定新卡','我的卡包']
        };
    }
    sestCurrentStyle = (index) => {
        return this.state.currentIndex === index ? 'current' : ''
    }
    handleClick = (e) => {
        const nodeName = e.target.nodeName.toUpperCase()
        let tag = e.target;
        if (nodeName === 'LI') {
            let index = parseInt(tag.getAttribute('index'))
            this.setState({
                currentIndex: index
            })
        }
    }
    render() {
        const {banner} = this.props
        const {vipRule} = this.props
        const {gropOnce} = this.props
        const {groupCity} = this.props
        const {storeCard} = this.props
        const CardIndex = (
            <div>
                <header>
                <i className={style.back}
                onClick={()=>{
                    this.props.history.go(-1)
                }}
                >&lt;</i>
                <h3 className={style.header_h3}>购买新卡</h3>
                <img className={style.more} src={more} alt=""/>
            </header>
            <section className={style.section}>
                    {
                        banner.map(v=>(
                        <div key={v.name} className={style.banner}>
                            <img className={style.ban_vip} src={v.mb_image} alt=""/>
                        </div> 
                        ))
                    } 
                    <div className={style.vipRoule}>
                        <p className={style.vip_p}><span className={style.vip_h2}>VIP+<em className={style.vip_em}>开通vip,演出随心看</em></span><i className={style.vip_back}
                        onClick={()=>{
                            this.props.history.push('/vip/index') 
                        }}
                        >></i></p>
                        <div style={{ overflowX: 'auto', height: '356px', display: 'flex' }}>
                            {                                               
                                vipRule.map(v=>(
                                                
                                    <div style={{ width: '520px', height: '80px', marginRight: '10px',}} className={style.item} key={v.benefits_desc} 
                                    
                                    >
                                        <img className={style.item_icon} src="http://img4.imgtn.bdimg.com/it/u=1987360574,1067821184&fm=26&gp=0.jpg" alt=""/>
                                                        
                                        <p className={style.item_p}>{v.benefits_name}</p>
                                    </div>                                                   
                                ))
                                            
                            }
                        </div>
                    </div> 
                    <div className={style.plus_content}
                    >
                        <div className={style.plus_title}>
                            <h2 className={style.plus_h1}>储值卡</h2>
                            <p>全国通用，购卡充值送200元</p>
                            
                        </div>
                        {
                            storeCard.map(v=>(
                                <div key={v.id} className={style.plus_cell}
                                >
                                        <img className={style.cell_pic} src={v.card_image} alt=""/>
                                        <div className={style.cell_detail}>
                                        <h3>{v.name}</h3>
                                            <p>有效期：长期有效</p>
                                            <h4 className={style.price}><em>￥{v.card_price}</em><span>赠vip+</span></h4>
                                        </div>
                                </div>
                            ))
                        }
                        
                    </div>
                    <div className={style.once_cart}>
                        <h2 className={style.plus_h1}>品类●次卡</h2>
                        {
                        gropOnce.map(v=>(
                            <div key={v.id} className={style.plus_cell}>
                                        <img className={style.cell_pic} src={v.card_image} alt=""/>
                                        <div className={style.cell_detail}>
                                        <h3>{v.name}</h3>
                                            <p>有效期：长期有效</p>
                                        <h4 className={style.price}><em>￥{v.card_price}</em><span>赠vip+</span></h4>
                                        </div>
                                </div>
                        )) 
                        }
                        
                    </div>  
                    <div className={style.once_cart}>
                        <h2 className={style.plus_h1}>城市●次卡</h2>
                        {
                                groupCity.map(v=>(
                                    <div key={v.id} className={style.plus_cell}>
                                            <img className={style.cell_pic} src={v.card_image} alt=""/>
                                            <div className={style.cell_detail}>
                                            <h3>{v.name}</h3>
                                                <p>有效期：长期有效</p>
                                            <h4 className={style.price}><em>￥{v.card_price}</em><span>赠vip+</span></h4>
                                            </div>
                                    </div>
                                )) 
                        }
                    </div>

            </section>

            <footer className={style.footer_cart}>
                <ul className={style.footer_ul} onClick={(e)=>this.handleClick(e)}>
                    {
                        this.state.btn && this.state.btn.map((v,index)=>(
                        <li key={index} index={index} className={this.state.currentIndex === index ? style.active : ''} 
                        >{v}</li>  
                        ))
                    }
                </ul>
            </footer>
            </div>
    
)
        return (
            <div>
                {
                  this.state.isloading === true?<Loading/> : CardIndex
                }
               
            </div>
        )
    }
    componentDidMount(){
        this.props.getCartList.call(this)
        this.props.getVipRuleList.call(this)
        this.props.getHotBannerList.call(this)
        
    }
}
function mapStateToprops({CardproductIndex}){
    return{
        groupList:CardproductIndex.group,
        gropOnce:CardproductIndex.gropOnce,
        vipRule:CardproductIndex.vipRule,
        banner:CardproductIndex.banner,
        groupCity:CardproductIndex.groupCity,
        storeCard:CardproductIndex.storeCard
    }
}
function mapDisPatchToProps(dispatch){
    return bindActionCreators(cartCreator,dispatch)
}
export default connect(mapStateToprops,mapDisPatchToProps)(CardproductIndex)




