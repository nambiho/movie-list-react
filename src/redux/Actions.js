import * as util from '../utils';

export const ACTION_SORTBY_CHANGE = 'ACTION_SORTBY_CHANGE';
export const ACTION_GET_MOVIELIST = 'ACTION_GET_MOVIELIST';
export const ACTION_RECEVE_DATA = 'ACTION_RECEVE_DATA';

export const onSortByChange = (sort_by, page) => {
	return ({
		type: ACTION_SORTBY_CHANGE,
		sort_by,
		page,
	})
};

export const onGetMovieList = props => dispatch => {
	function RecieveData (data) {
		return {
			type: ACTION_RECEVE_DATA,
			moviedata: data,
		}
	}
	const {sort_by, page} = props; 
	const url = util.getURL({sort_by, page});
	const promise = util.fetchMovieList(url);
	promise.then((data) => {
		dispatch(RecieveData(data));
	})
	//console.log(promise)
	return {
		type: ACTION_GET_MOVIELIST
	}
};
