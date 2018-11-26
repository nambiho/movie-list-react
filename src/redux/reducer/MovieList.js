import * as types from '../Actions'

const initialState = {
  moviedata: {},
};

export default function getMovieList(state = initialState, action) {
  switch (action.type) {
    case types.ACTION_GET_MOVIELIST:
      return {
        ...state,
      }
    case types.ACTION_RECEVE_DATA:
      const { moviedata } = action;
      return {
        moviedata,
      }
    default:
      return state;
  }
}