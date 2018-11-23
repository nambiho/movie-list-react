import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
//import CardMedia from '@material-ui/core/CardMedia';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
//import Button from '@material-ui/core/Button'
//import './Movie.css';

// function Movie ({title, poster, genres, synopsis}) {
// 	return (
// 		<div className="Movie">
// 			<div className="Movie__Columns">
// 				<MoviePoster poster={poster} alt={title} />
// 			</div>
// 			<div className="Movie__Columns">
// 				<h1>{title}</h1>
// 				<div className="Movie__Genres">
// 					{genres.map((genre,index) => <MovieGenre genre={genre} key={index} />)}
// 				</div>
// 				<p className="Movie__Synopsis">
// 					{synopsis.length > 200 ? `${synopsis.slice(0, 200)}...` : synopsis}
// 				</p>
// 			</div>
// 		</div>
// 	);
// }

const styles = theme => {
	console.log(theme.breakpoints.up('md'))
	return {
		Movie: {
			width: '40%',
			overflow: 'visible',
			display: 'flex',
			justifyContent: 'space-around',
			alignItems: 'flex-start',
			flexWrap: 'wrap',
			marginBottom: '50px',
			textOverflow: 'ellipsis',
			padding: '0 20px',
			boxShadow: '0 8px 38px rgba(133,133,133,0.3), 0 5px 12px rgba(133,133,133, 0.22)',
			},
		Movie__Columns: {
			width: '50%',
			boxSizing: 'border-box',
			textOverflow: 'ellipsis',
		},
		Movie__Poster: {
			maxWidth: '100%',
			position: 'relative',
			marginTop: '-20%',
			boxShadow: '-10px 19px 38px rgba(83,83,83,0.3), 10px 15px 12px rgba(80,80,80,0.22)',
		},
		Movie__Genres: {
			display: 'flex',
			flexWrap: 'wrap',
			marginBottom: '20px',
		},
		h1: {
			fontSize: '20px',
			fontWeight: '600'
		}
	}
}

function Movie({classes, title, poster, genres, synopsis}) {
	//<img src={poster} alt={title} className={classes.Movie_Poster} />
	console.log(classes)
	return (
		<Card className={classes.Movie}>
			<CardContent className={classes.Movie__Columns}>
				<MoviePoster poster={poster} alt={title} classes={classes} />
			</CardContent>
			
			<CardContent className={classes.Movie__Columns}>
				<Typography component='h1' variant='h5' classes={{
					root: classes.Movie__Genres
				}}>
					{title}
				</Typography>
				
				<Typography component='p' classes={{
					root: classes.Movie__Genres
				}}>
					{genres.map((genre,index) => <MovieGenre genre={genre} key={index} />)}
				</Typography>

				<Typography component='p'>
					{synopsis.length > 200 ? `${synopsis.slice(0,200)}...` : synopsis}
				</Typography>
			</CardContent>
		</Card>
	)
}

function MoviePoster ({poster, alt, classes}) {
	return (
		<img src={poster} alt={alt} title={alt} className={classes.Movie__Poster} />
	)
}

function MovieGenre ({genre}) {
	return (
		<span className="Movie__Genre">{genre}</span>
	)
}

Movie.propTypes = {
	title: PropTypes.string.isRequired,
	poster: PropTypes.string.isRequired,
	genres: PropTypes.array.isRequired,
	synopsis:PropTypes.string.isRequired
}

MoviePoster.propTypes = {
	poster: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired
}

MovieGenre.propTypes = {
	genre: PropTypes.string.isRequired
}

export default withStyles(styles)(Movie);
//export default Movie