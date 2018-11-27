import React,{Component} from 'react';
import RouterView from 'router';

class ShopCar extends Component{
	render(){
		const {routes}=this.props;
		return(<div>
			<RouterView routes={routes}/>
		</div>)
	}
}
export default ShopCar;