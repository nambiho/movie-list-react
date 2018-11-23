import React, { Component } from 'react';
import Movie from './Movie';
import CircularProgress from '@material-ui/core/CircularProgress';
import './App.css';
//import path from 'path';

class App extends Component {

  state = {};

  componentDidMount () {
    this._getMovies();
  }

  _renderMovies = () => {
    const movies = this.state.movies.map(movie => {
      return <Movie
        title={movie.title}
        poster={movie.medium_cover_image}
        key={movie.id}
        genres={movie.genres}
        synopsis={movie.synopsis}
        />
    });
    return movies;
  }

  _getMovies = async (st) => {
    const movies = await this._callApi();
    //igonsole.log(moves);
    this.setState({
      movies
    })
  }

  _callApi = () => {
    // return fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating&page=1')
    // .then(res => res.json())
    // .then(json => json.data.movies)
    // .catch(err => console.log(err));
    return [
      {
        title: 'Anand',
        medium_cover_image: `/test/t5.jpg`,
        id: 1,
        genres: ['test1', 'test2'],
        synopsis: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis cumque maiores sit neque consequatur commodi fugiat, provident vero corrupti, hic tempora deleniti saepe expedita numquam placeat nobis repudiandae? Possimus neque tenetur qui modi, ad vero quos quasi, aperiam, sit nihil ratione aut mollitia animi quod illum dignissimos unde. Cum modi exercitationem expedita incidunt et doloremque molestiae placeat inventore sunt praesentium eius, nam, pariatur facere deserunt quae tenetur, reprehenderit provident explicabo quos ratione nihil maxime quam alias? Aperiam incidunt commodi iste in nemo at quidem illum laborum nihil, eveniet itaque, explicabo recusandae doloribus aut cupiditate dignissimos dicta repellat quo nobis quae!'
      },
      {
        title: 'The God Father',
        medium_cover_image: `/test/godfather.jpg`,
        id: 2,
        genres: ['test1', 'test2'],
        synopsis: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis cumque maiores sit neque consequatur commodi fugiat, provident vero corrupti, hic tempora deleniti saepe expedita numquam placeat nobis repudiandae? Possimus neque tenetur qui modi, ad vero quos quasi, aperiam, sit nihil ratione aut mollitia animi quod illum dignissimos unde. Cum modi exercitationem expedita incidunt et doloremque molestiae placeat inventore sunt praesentium eius, nam, pariatur facere deserunt quae tenetur, reprehenderit provident explicabo quos ratione nihil maxime quam alias? Aperiam incidunt commodi iste in nemo at quidem illum laborum nihil, eveniet itaque, explicabo recusandae doloribus aut cupiditate dignissimos dicta repellat quo nobis quae!'
      }
    ]
  }

  render() {
    const { movies } = this.state;
    return (
      <div className={movies ? "App" : "App--loading"}>
        {
          this.state.movies ? this._renderMovies() : <div className='circularWrap'><CircularProgress /></div>
        }
      </div>
    );
  }
}

export default App;
