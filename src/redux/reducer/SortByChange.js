import * as types from '../Actions'

const initialState = {
	sort_by: 'rating',
  page: 1,
};

export default function getSortBy(state = initialState, action) {
  switch (action.type) {
    case types.SORTBY_CHANGE:
      const { sort_by, page } = action;
      return {
        sort_by,
        page,
			}
    default:
      return state;
  }
}