import React, { Component } from 'react';
import Movie from './Movie';
import CircularProgress from '@material-ui/core/CircularProgress';
import './App.css';

class App extends Component {

  state = {};

  componentDidMount () {
    this._getMovies();
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.medium_cover_image} key={index} />
    });
    return movies;
  }

  _getMovies = async () => {
    const movies = await this._callApi();
    this.setState({
      movies
    })
  }

  _callApi = () => {
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating&page=1')
    .then(res => res.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        {
          this.state.movies ? this._renderMovies() : <div className='circularWrap'><CircularProgress /></div>
        }
      </div>
    );
  }
}

export default App;
