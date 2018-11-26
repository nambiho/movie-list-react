import { combineReducers } from 'redux';
import MovieList from './MovieList';
import SortByChange from './SortByChange';

export default combineReducers({
	MovieList,
	SortByChange
})