import React,{Component} from 'react';
import axios from 'axios';
import 'common/css/toplist.css';

class TopList extends Component{
	constructor(){
		super();
		this.state={
			toplist:[]
		}
		this.jumpDetail=this.jumpDetail.bind(this)
	}
	componentDidMount(){
		axios.get('/toplist').then(res=>{
			this.setState({
				toplist:res.data
			})
		})
	}
	jumpDetail(itm){
		console.log(this.props)
		this.props.history.push({pathname:`/qqmusic/detail/${itm.id}`,state:itm})
	}
	render(){
		const {toplist}=this.state;
		return (<div className='toplist'>
			<ul>
			{
				toplist.length && toplist.map((itm,ind)=>{
					return <li key={ind} onClick={()=>{
							this.jumpDetail(itm)
						}}>
						<div className='mainlist'>
							<img alt="3245" src={itm.picUrl}/>
							<div className='right'>
								<h3>{itm.topTitle}</h3>
								{
									itm.songList.length && itm.songList.map((item,index)=>{
										return <p key={index}>
											<i>{index+1}. </i>
											<span> {item.songname}</span>
											<i>--{item.singername}</i>
										</p>
									})
								}
							</div>
						</div>
					</li>
				})
			}
			</ul>
		</div>)
	}
}
export default TopList;