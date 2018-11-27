import {createStore,combineReducers} from 'redux';
import shoselist from './reducer/shoselist';
import catmovie from './reducer/catmovie';

const Reducers=combineReducers({
	shoselist,
	catmovie
})
export default createStore(Reducers);