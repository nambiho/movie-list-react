import React from 'react';
import MovieCard from './MovieCard';
import Grid from '@material-ui/core/Grid'

const getMovieCard = movies => {
	return movies.map(movie => (
		<MovieCard
			title={movie.title}
			poster={movie.medium_cover_image}
			key={movie.id}
			genres={movie.genres}
			synopsis={movie.synopsis}
		/>
	))
}

const MovieList = ({ movies }) => {
	return (
		<div style={{margin: '50px'}}>
			<Grid container spacing={24}>
				{getMovieCard(movies)}
			</Grid>
		</div>
	)
}

export default MovieList;