import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography';
import LinesEllipsis from 'react-lines-ellipsis';

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
			//height: '75%',
			boxShadow: '0 8px 38px rgba(133,133,133,0.3), 0 5px 12px rgba(133,133,133, 0.22)',
			// [`@media screen and (min-width: 320px) and (mas-width: 667px)`]: {
			// 	width: '100%'
			// },
			[`@media screen and (min-width: 320px) and (max-width: 680px) and (orientation: portrait)`]: {
				width: '100%',
				//flexDirection: 'column'
			}
		},
		column: {
			width: '30%',
			boxSizing: 'border-box',
			textOverflow: 'ellipsis',
			"&:last-child":{
				width: '60%'
			},
			[`@media screen and (min-width: 320px) and (max-width: 680px) and (orientation: portrait)`]: {
				width: '100%!important',
			}
		},
		title: {
			fontSize: '20px',
			fontWeight: '600',
			marginBottom: '20px',
		},
		poster: {
			maxWidth: '100%',
			position: 'relative',
			marginTop: '-20%',
			boxShadow: '-10px 19px 38px rgba(83,83,83,0.3), 10px 15px 12px rgba(80,80,80,0.22)',
			[`@media screen and (min-width: 320px) and (max-width: 680px) and (orientation: portrait)`]: {
				top: 0,
				left: 0,
				width: '100%'
			}
		},
		genres: {
			display: 'flex',
			flexWrap: 'wrap',
			marginBottom: '20px',
		},
		genre: {
			marginRight: '10px',
			color: '#8485BD'
		}
	}
}

const MovieCard = ({classes, title, poster, genres, synopsis, key}) => {
	return (
		<Grid item xs={12} lg={4} sm={6} key={key}>
			<Card classes={{ root: classes.root }}>
				<CardContent className={ classes.column }>
					<img src={poster} alt={title} title={title} className={ classes.poster } />
				</CardContent>

				<CardContent className={classes.column}>
					<Typography component='h1' variant='h5' classes={{ root: classes.title }}>
						{ title }
					</Typography>
					
					<Typography component='p' classes={{ root: classes.genres }}>
						{genres.map((genre, index) => <span key={index} className={classes.genre}>{ genre }</span>)}
					</Typography>

					<Typography component='div'>
						<LinesEllipsis
							text={synopsis}
							maxLine='3'
							ellipsis='...'
							trimRight
							basedOn='letters'
							/>
					</Typography>
				</CardContent>
			</Card>
		</Grid>
	);
};

export default withStyles(styles)(MovieCard);