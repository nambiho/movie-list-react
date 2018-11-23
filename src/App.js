import React, { Component } from 'react';
import MovieList from './components/MovieList/MovieGrid'
import * as util from './utils';
import CircularProgress from '@material-ui/core/CircularProgress';
import withStyles from '@material-ui/core/styles/withStyles';

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

class App extends Component {
  state = {
    sort_by: 'rating',
    page: 0,
  };

  getMovieData = async () => {
    const _url = util.getURL({sort_by: this.state.sort_by, page: this.state.page});
    try {
      const moviedata = await util.fetchMovieList(_url);
      this.setState({moviedata});
    } catch (e) {
      console.log(e);
    }
  }

  componentDidMount () {
    this.getMovieData();
  }

  render () {
    const {classes} = this.props;
    const {moviedata} = this.state;

    return (
      <div>
        { moviedata ? <MovieList movies={moviedata.movies} /> : <div className={classes.circular}><CircularProgress /></div> }
      </div>
    );
  }
}


export default withStyles(style)(App);
