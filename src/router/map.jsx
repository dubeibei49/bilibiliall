import React,{Component} from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';

class RouterMap extends Component{
	render(){
		const {routes}=this.props;
		const defaultRoute=<Route key={0} exact path='/' component={()=>{
			return <Redirect to='/qqmusic'/>
		}}></Route>
		return (<Switch>
			{
				routes.length && routes.map((itm,ind)=>{
					return <Route path={itm.path} render={(api)=>{
						const Component=itm.component;
						const Children=itm.children === undefined ? []:itm.children;
						return <Component routes={Children} {...api}></Component>
					}} key={ind}></Route>
				}).concat([defaultRoute])
			}
		</Switch>)
	}
}
export default RouterMap;