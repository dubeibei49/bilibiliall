import React,{Component} from 'react';
import RouterView from 'router';
import 'common/css/catmovie.css';
import 'common/css/header.css';

class CatMovie extends Component{
	render(){
		const {routes}=this.props;
		return <div>
			<header className='cathead'>
				<h2>猫眼电影</h2>
			</header>
			<RouterView routes={routes}/>
		</div>
	}
}
export default CatMovie;


