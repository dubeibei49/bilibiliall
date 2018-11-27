const Catmovie=(state={catmovie:[]},action)=>{
	const {type,payload}=action;
	switch(type){
		case 'CATMOVIE':
			return {...state,catmovie:payload}
		default:
			return state;
	}
}
export default Catmovie;