import React, { Component } from 'react';

// AppBarContainer Container를 이용
// MovieList Container 이용 하지 않음
// redux
// dispatch 에서 수행 할 Action을 호출 하여 reducer로 변경 state 값 보낼 준비 
// -> action 수행 후 데이터 반환 action type이 존재 해야함(데이터 변환,...) 
// -> reducer에서 state 리턴

import AppBarConnect from './redux/containers/AppBarContainer';
import MovieList from './components/MovieList';
import { connect } from 'react-redux';
import * as actions from './redux/Actions';
import CircularProgress from '@material-ui/core/CircularProgress';
import withStyles from '@material-ui/core/styles/withStyles';

// Render: componentWillMount() -> render() -> componentDidMount()
// Update: componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()
// Delete: componentWillUnmount()

const style = theme => {
  return {
    circular: {
      display: 'flex',
      height: '100vh',
      justifyContent: 'center',
      alignItems: 'center',
    }
  }
}

//sort_by = 'rating', page = 1
class App extends Component {
  getMovieData = async () => {
    const { sort_by, page, getMovieList } = this.props;
    try {
      await getMovieList({sort_by, page});
    } catch (e) {
      console.log(e);
    }
  }

  componentDidUpdate (prevProps) {
    (prevProps.sort_by !== this.props.sort_by || prevProps.page !== this.props.page)
    && this.getMovieData();
  }

  componentDidMount () {
    this.getMovieData();
  }

  render () {
    const { classes, moviedata } = this.props;
    return (
      <div>
        { moviedata
          ? <div><AppBarConnect /><MovieList movies={ moviedata.movies } /></div> 
          : <div className={classes.circular}><CircularProgress /></div> }
      </div>
    );
  }
}

const AppConnect = connect(
  state => {
    return {
      sort_by: state.SortByChange.sort_by,
      page: state.SortByChange.page,
      moviedata: state.MovieList.moviedata,
    }
  },
  dispatch => {
    return {
      getMovieList: (argv) => {
        actions.onGetMovieList(argv)(dispatch)
      }
    }
  }
) (App)

export default withStyles(style)(AppConnect);
