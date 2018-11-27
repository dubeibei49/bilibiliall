import React,{Component} from 'react';
import 'common/css/search.css';

class Search extends Component{
	constructor(){
		super();
		this.state={
			tit:'热门搜索',
			hotSong:['Gai见面吧电台','MOVIE YOUR BODY','NEVER BE ALONE','爱情有时很残忍','红尘来去一场梦','爱到老学到老','LZONE']
		}
	}
	render(){
		const {tit,hotSong} =this.state;
		return (<div>
			<nav><input type='text' placeholder='搜索歌曲、歌单、专辑'/></nav>
			<h3>{tit}</h3>
			<ul className='searchList'>
				{
					hotSong.length && hotSong.map((itm,ind)=>{
						return <li key={ind}>{itm}</li>
					})
				}
			</ul>
		</div>)
	}
}
export default Search;