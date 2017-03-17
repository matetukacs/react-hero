import React from 'react';
import Comic from './Comic';

const ComicGrid = React.createClass({
	render() {
		return (
			<div className="comic-grid">
				{this.props.comics.map( comic => <Comic {...this.props} key={comic.id} comic={comic}/> )}
			</div>
		)
	}
});

export default ComicGrid;
