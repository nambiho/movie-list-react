import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography';

const styles = theme => {
	return {
		root: {
			overflow: 'visible',
			display: 'flex',
			justifyContent: 'space-around',
			alignItems: 'flex-start',
			flexWrap: 'wrap',
			marginBottom: '50px',
			textOverflow: 'ellipsis',
			height: '90%',
			boxShadow: '0 8px 38px rgba(133,133,133,0.3), 0 5px 12px rgba(133,133,133, 0.22)',
		},
		column: {
			width: '50%',
			boxSizing: 'border-box',
			textOverflow: 'ellipsis',
		},
		poster: {
			maxWidth: '100%',
			position: 'relative',
			marginTop: '-20%',
			boxShadow: '-10px 19px 38px rgba(83,83,83,0.3), 10px 15px 12px rgba(80,80,80,0.22)',
		},
		genres: {
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

const MovieCard = ({classes, title, poster, genres, synopsis, key}) => {
	const synopsis_size = 150;
	return (
		<Grid item xs={12} lg={4} sm={6} key={key}>
			<Card classes={{ root: classes.root }}>
				<CardContent className={ classes.column }>
					<img src={poster} alt={title} title={title} className={ classes.poster } />
				</CardContent>

				<CardContent className={classes.column}>
					<Typography component='h1' variant='h5' classes={{ root: classes.genres }}>
						{ title }
					</Typography>
					
					<Typography component='p' classes={{ root: classes.genres }}>
						{genres.map((genre, index) => <span key={index}>{ genre }</span>)}
					</Typography>

					<Typography component='p'>
						{synopsis.length > synopsis_size ? `${synopsis.slice(0, synopsis_size)}...` : synopsis}
					</Typography>
				</CardContent>
			</Card>
		</Grid>
	);
};

export default withStyles(styles)(MovieCard);