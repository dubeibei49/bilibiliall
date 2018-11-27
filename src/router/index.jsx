import React,{Component} from 'react';
import RouteMap from './map';
import RouterConfig from './routes';

class RouterView extends Component{
	render(){
		const {routes}=this.props;
		return <RouteMap routes={routes ? routes : RouterConfig}></RouteMap>
	}
}

export default RouterView;