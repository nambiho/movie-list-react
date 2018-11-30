import React from 'react';
import * as actions from '../Actions';
import { connect } from 'react-redux';
import AppBar from '../../components/AppBar';

// Container 를 이용

export default connect(
  state => {
    return {
      sort_by: state.SortByChange.sort_by,
      page: state.SortByChange.page,
      total: state.MovieList.moviedata.movie_count
    }
  },
  dispatch => {
    return {
      onSortByChange: (e) => {
        //console.log('dispatch');
        return dispatch(actions.onSortByChange(e.target.value, 1))
      }
    }
  }
)(class extends React.Component {
  render () {
    const { onSortByChange, sort_by, page, total } = this.props;
    return (
      <div>
        <AppBar onSortByChange={ onSortByChange } sort_by={ sort_by } page={ page } total={ total } />
      </div>
    )
  }
});