import React, { Component } from 'react';
import Proptypes from 'prop-types';
import MovieList from './components/MovieList/MovieGrid'
import * as util from './utils';
import CircularProgress from '@material-ui/core/CircularProgress';
import withStyles from '@material-ui/core/styles/withStyles';



import Appbar from '@material-ui/core/AppBar';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const SORTBY = 'title, year, rating, peers, seeds, download_count, like_count, date_added'.split(', ')




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
    page: 1,
  };

  getMovieData = async () => {
    const {sort_by, page} = this.state;
    console.log(sort_by)
    const _url = util.getURL({sort_by, page});
    try {
      const moviedata = await util.fetchMovieList(_url);
      this.setState({moviedata});
    } catch (e) {
      console.log(e);
    }
  }

  handleChange = (e) => {
    new Promise((r,j) => {r()})
    .then(() => this.setState({
      sort_by: e.target.value,
      page: 1
    }))
    .then(() => this.getMovieData())
    .catch(e => console.log('handleChange', e))
  }

  componentDidMount () {
    this.getMovieData();
  }

  render () {
    
    const {classes} = this.props;
    const {moviedata} = this.state;
    //console.log(moviedata)
    return (
      <div>

        <Appbar>
          <div style={{padding: '0 50px', display: 'flex'}}>
            <h3>Select</h3>
            <FormControl style={{padding: '0 20px', display: 'flex', alignContent: 'center', alignItems: 'center', flexDirection: 'unset', marginTop: '-5px'}}>
              <Select value={this.state.sort_by} style={{color: 'white'}} onChange={this.handleChange}>
                {SORTBY.map((d, idx) => <MenuItem value={d} name={d} key={idx}>{d}</MenuItem>)}
              </Select>
            </FormControl>
          </div>
        </Appbar>



        { moviedata ? <MovieList movies={moviedata.movies} /> : <div className={classes.circular}><CircularProgress /></div> }
      </div>
    );
  }
}

App.defaultProps = {
  movies: Proptypes.object,
  sort_by: Proptypes.string.isRequired,
  page: Proptypes.number.isRequired
}

export default withStyles(style)(App);
