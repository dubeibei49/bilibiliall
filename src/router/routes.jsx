import Dance from 'view/dance';
import Katong from 'view/katong';

import Shopcar from 'view/shopcar';
import Detail from 'view/shopcar/detail';
import ShopList from 'view/shopcar/shoplist';

import Folk from 'view/dance/folk';
import Juzz from 'view/dance/juzz';
import Latin from 'view/dance/latin';

import Qqmusic from 'view/qqmusic';
import Rank from 'view/qqmusic/rank';
import TopList from 'view/qqmusic/toplist';
import Search from 'view/qqmusic/search';
import QQDetail from 'view/qqmusic/detail';

import CatMovie from 'view/catmovie';
import Address from 'view/catmovie/address';
import Movie from 'view/catmovie/movie';
import Cinema from 'view/catmovie/cinema';
import Mine from 'view/catmovie/mine';

import Carousel from 'view/carousel/carousel';
import Pagenum from 'view/pagenum/pagenum';

import Rice from 'view/rice';
import Comment from 'view/rice/comment';
import Consult from 'view/rice/consult';
import Merchant from 'view/rice/merchant';

const RouterConfig =[{
	path:'/dance',
	component:Dance,
	children:[{
		path:'/dance/folk',
		component:Folk
	},{
		path:'/dance/juzz',
		component:Juzz
	},{
		path:'/dance/latin',
		component:Latin
	}]
},{
	path:'/katong',
	component:Katong
},{
	path:'/shopcar',
	component:Shopcar,
	children:[{
		path:'/shopcar/detail',
		component:Detail
	},{
		path:'/shopcar/shoplist',
		component:ShopList
	}]
},{
	path:'/qqmusic',
	component:Qqmusic,
	children:[{
		path:'/qqmusic/rank',
		component:Rank
	},{
		path:'/qqmusic/toplist',
		component:TopList
	},{
		path:'/qqmusic/search',
		component:Search,
	},{
		path:'/qqmusic/detail/:id',
		component:QQDetail
	}]
},{
	path:'/carousel',
	component:Carousel
},{
	path:'/pagenum',
	component:Pagenum
},{
	path:'/catmovie',
	component:CatMovie,
	children:[{
		path:'/catmovie/movie',
		component:Movie
	},{
		path:'/catmovie/cinema',
		component:Cinema
	},{
		path:'/catmovie/mine',
		component:Mine
	}]
},{
	path:'/address',
	component:Address
},{
	path:'/rice',
	component:Rice,
	children:[{
		path:'/rice/comment',
		component:Comment
	},{
		path:'/rice/consult',
		component:Consult
	},{
		path:'/rice/merchant',
		component:Merchant
	}]
}]
export default RouterConfig;
