const Shoselist =(state={shoselist:[]},action)=>{
	const {type,payload}=action;
	switch(type){
		case 'SHOSELIST':
			return {...state,shoselist:payload}
		default:
			return state
	}
}
export default Shoselist;