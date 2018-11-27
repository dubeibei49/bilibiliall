import React,{Component} from 'react';
import 'common/css/header.css';

import Consult from './consult';
import Merchant from './merchant';

class Rice extends Component{
	constructor(){
		super();
		this.state={
			tit:'粥品香坊    (回龙观)',
			time:'蜂鸟专送/38分钟送达',
			moneytype:'在线支付满28减5',
			more:'粥品香坊其烹饪粥料的秘方源于中国千年古法，在融和现代制作工艺，由世界烹饪大师屈浩先生领衔研发。坚守纯天然、0添加的良心品质深得消费者青睐，发展至今成为粥类的引领品牌。是2008年奥运会和2013年园博会指定餐饮服务商。',
			tablist:[{
				name:'商品'
				},{
					name:'评论'
				},{
					name:'商家'
				}]
		}
	}
	render(){
		const {tablist,flag,tit,time,moneytype,more}=this.state;
		return (<div className='ricepage'>
			<header className='ricehead'>
				<div className='head'>
					<dl>
						<dt><img alt='' src='http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg'/></dt>
						<dd>
							<h4>{tit}</h4>
							<small>{time}</small><br/>
							<small>{moneytype}</small>
						</dd>
					</dl>
					<span>{more}</span>
				</div>
			</header>
			<div>
				<ul className='tablist'>
					{
						tablist.length && tablist.map((itm,ind)=>{
							return <li key={ind} onClick={()=>{
								this.setState({
									flag:ind%2===0
								})
							}}>{itm.name}</li>
						})
					}
				</ul>
				<div>
					{
						flag?<Consult/>:<Merchant/>
					}
				</div>
			</div>
		</div>)
	}
}
export default Rice;