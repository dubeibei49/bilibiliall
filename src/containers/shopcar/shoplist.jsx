import React,{Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import 'common/css/shoplist.css';
class ShopList extends Component{
	componentDidMount(){
		const {update}=this.props;
		axios.get('/shouslist').then(res=>{
			update(res.data)
		}) 
		console.log(this.props);
		this.jumpDetail=this.jumpDetail.bind(this);
	}
	jumpDetail(num){
		console.log(this.props);
		this.props.history.push({
            pathname:'/shopcar/detail',
            params:{
                id:num
            }
        })
	}
	render(){
		console.log(this.props);
		const {shoselist}=this.props;
		return(<div className='shoplist'>
			<div className='shopHeader'>商品列表</div>
			<ul>
				{
					shoselist.length && shoselist.map((itm,ind)=>{
						return <li key={ind} onClick={()=>{
							this.jumpDetail(itm.id)
						}}>
						
							<dl className='dls'>
								<dt><img alt='想买' src={itm.img2}/></dt>
								<dd>
									<p>{itm.title}</p>
									<b>¥{itm.price}</b>
									<div className='dimgray'>
										<span>{itm.yunfei}</span>
										<span>{itm.act}</span>
										<span>{itm.area}</span>
									</div>
								</dd>
							</dl>
						</li>
					})
				}
			</ul>
		</div>)
	}
}
const mapStateToProps=(state)=>{
	return state.shoselist;
}
const mapDispatchToProps=(dispatch)=>{
	return {
		update(payload){
			dispatch({type:'SHOSELIST',payload})
		}
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(ShopList);