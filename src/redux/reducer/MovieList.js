import * as types from '../Actions'

const initialState = {
  moviedata: {},
};

export default function getMovieList(state = initialState, action) {
  switch (action.type) {
    case types.GET_MOVIELIST:
      return {
        ...state,
      }
    case types.RECEVE_DATA:
      const { moviedata } = action;
      return {
        moviedata,
      }
    default:
      return state;
  }
}