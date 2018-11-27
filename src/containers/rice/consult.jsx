import React,{Component} from 'react';
import axios from 'axios';
import 'common/css/consult.css';

class Consult extends Component{
	constructor(){
		super();
		this.state={
			ricelist:[]
		}
	}
	componentDidMount(){
		axios.get('/ricelist').then(res=>{
			this.setState({
				ricelist:res.data.data
			})
		})
	}
	render(){
		const {ricelist}=this.state;
		return <div>
			<div className='box'>
				{
					ricelist.length && ricelist.map((itm,ind)=>{
						console.log(itm)
						return <div key={ind}>
							<div className='left'>
								<ul className='leftul'>
									<li>{itm.name}</li>
								</ul>
							</div>
							<ul className='right'>
								{
									itm.foods.length && itm.foods.map((item,index)=>{
										return <li key={index}>{item.name}</li>
										
									})
								}
							</ul>
						</div>
					})
				}
			</div>
		</div>
	}
}
export default Consult;
