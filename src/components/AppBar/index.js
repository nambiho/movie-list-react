import React from 'react';
import Appbar from '@material-ui/core/AppBar';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const SORTBY = 'title, year, rating, peers, seeds, download_count, like_count, date_added'.split(', ')

const AppBar = ({ sort_by, page, total, onSortByChange }) => {
	return (
		<Appbar>
			<div style={{ padding: '0 50px', display: 'flex' }}>
				<h3>Select</h3>
				<FormControl style={{padding: '0 20px', display: 'flex', alignContent: 'center', alignItems: 'center', flexDirection: 'unset', marginTop: '-5px'}}>
					<Select value={ sort_by } style={ {color: 'white'} } onChange={ onSortByChange }>
						{ SORTBY.map((d, idx) => <MenuItem value={d} name={d} key={idx}>{d}</MenuItem>) }
					</Select>
				</FormControl>
				<h3 style={{width:'130px', textAlign: 'left', marginLeft: '5px'}}> Total : {total} </h3>
				<h3 style={{width:'130px', textAlign: 'center'}}> - {page} Page - </h3>
			</div>
		</Appbar>
	);
};


export default AppBar;