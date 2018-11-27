import React,{Component} from 'react';
import 'common/css/rank.css';

class Rank extends Component{
	render(){
		return (<div className='bigbox'>
			<img className='bigimg' alt="" src='https://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/983750.jpg?max_age=2592000'/>
			<h4>电台</h4>
			<div className='dls'>
				<dl>
					<dt><img className='smallimg' alt="egr" src='https://y.gtimg.cn/music/photo/radio/track_radio_199_13_1.jpg?max_age=2592000'/></dt>
					<dd>热歌</dd>
				</dl>
				<dl>
					<dt><img className='smallimg' alt="rhg" src='https://y.gtimg.cn/music/photo/radio/track_radio_307_13_1.jpg?max_age=2592000'/></dt>
					<dd>一人一首招牌歌</dd>
				</dl>
			</div>
			<h4>热门歌单</h4>
			<div className='foot'>
				<p>去客户端发现更多好音乐 ></p>
				<b>查看电脑版网页</b>
			</div>
		</div>)
	}
}
export default Rank;