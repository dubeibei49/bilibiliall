import React,{Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {Link} from 'react-router-dom';
import 'common/css/catmovie.css';
import 'common/css/header.css';

class Movie extends Component{
	constructor(){
		super();
		this.state={
			address:'北京'
		}
		this.jumpAddress=this.jumpAddress.bind(this)
	}
	componentDidMount(){
		const {movieList} =this.props;
		axios.get('/catmovie').then(res=>{
			movieList(res.data)
		})
	}
	jumpAddress(){
		console.log('3465')
	}
	render(){
		const {address} =this.state;
		const {catmovie}=this.props;
		return <div>
			<nav className='nav'>
				<span onClick={this.jumpAddress}><Link to='/address'>{address}</Link></span>
				<div><b className='hot activenav'>正在热映</b><b className='new'>即将上映</b></div>
				<span>搜索</span>
			</nav>
			<ul className='movielist'>
				{
					catmovie.length && catmovie.map((itm,ind)=>{
						return <li key={ind}>
							<dl>
								<dt><img alt='' src={itm.img}/></dt>
								<dd>
									<div className='rleft'>
										<h3>{itm.nm}</h3>
										<small>观众评 9.4</small>
										<small className='dian'>主演:{itm.star}</small>
										<small className='dian'>{itm.showInfo}</small>
									</div>
									<button className='btn'>购票</button>
								</dd>
							</dl>
						</li>
					})
				}
			</ul>
		</div>
	}
}
const mapStateToProps=(state)=>{
	return state.catmovie;
}
const mapDispatchToProps=(dispatch)=>{
	return {
		movieList(payload){
			dispatch({type:'CATMOVIE',payload})
		}
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(Movie);
