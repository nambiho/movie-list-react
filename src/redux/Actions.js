import * as util from '../utils';

export const SORTBY_CHANGE = 'select/SORTBY_CHANGE';
export const GET_MOVIELIST = 'movielist/GET_MOVIELIST';
export const RECEVE_DATA = 'movielist/RECEVE_DATA';

export const onSortByChange = (sort_by, page) => {
	return ({
		type: SORTBY_CHANGE,
		sort_by,
		page,
	})
};

export const onGetMovieList = props => dispatch => {
	function RecieveData (data) {
		return {
			type: RECEVE_DATA,
			moviedata: data,
		}
	}
	const {sort_by, page} = props; 
	const url = util.getURL({sort_by, page});
	const promise = util.fetchMovieList(url);
	promise.then((data) => {
		dispatch(RecieveData(data));
	})
};
