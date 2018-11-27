import React,{Component} from 'react';
import {Carousel} from 'antd';
import 'common/css/carousel.css';
import 'antd/dist/antd.css';

class CarouselMk extends Component{
	render(){
		return <div className='swiper'>
			<Carousel autoplay>
				<div className='carouselchild'><img alt={'img'} src='https://p1-q.mafengwo.net/s12/M00/10/46/wKgED1vZcDOAJjsuAAKzLID8YDM21.jpeg'/></div>
	        	<div className='carouselchild'><img alt={'img'} src='https://n1-q.mafengwo.net/s12/M00/4F/46/wKgED1va5VuAVv4rAALNU7tRSWA40.jpeg'/></div>
	        	<div className='carouselchild'><img alt={'img'} src='https://p4-q.mafengwo.net/s12/M00/33/AE/wKgED1vZkFqAe5XHAANxv9_2IsQ34.jpeg'/></div>
	        	<div className='carouselchild'><img alt={'img'} src='https://b2-q.mafengwo.net/s12/M00/45/21/wKgED1vYhkCALEGcAAaLdNXIm7M07.jpeg'/></div>
	        </Carousel>
		</div>
	}
}
export default CarouselMk;