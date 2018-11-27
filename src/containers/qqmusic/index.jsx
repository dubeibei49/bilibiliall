import React,{Component} from 'react';
import RouterView from 'router';
import 'common/css/qqmusic.css';
import {Link} from 'react-router-dom';

class Qqmusic extends Component{
	render(){
		const {routes} =this.props;
		return (<div>
			<header className='qqheader'>
				<h3>QQ音乐</h3>
			</header>
			<ul className='tab'>
				<li><Link to='/qqmusic/rank'>推荐</Link></li>
				<li><Link to='/qqmusic/toplist'>排行榜</Link></li>
				<li><Link to='/qqmusic/search'>搜索</Link></li>
			</ul>
			<RouterView routes={routes}/>
		</div>)
	}
}
export default Qqmusic;