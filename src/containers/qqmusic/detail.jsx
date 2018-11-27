import React,{Component} from 'react';

class Detail extends Component{
	render(){
		const data=this.props.history.location.state;
		console.log(data.songList)
		return <div>
			{
				data.length && data.map((itm,ind)=>{
					return <div key={ind}><a>{itm.singername}</a><a>{itm.songname}</a></div>
				})
			}
		</div>
	}
}
export default Detail;
