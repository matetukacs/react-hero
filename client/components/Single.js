import React from 'react';
import Comic from './Comic';
import ComicInfo from './ComicInfo';

const Single = React.createClass({
	render() {

		const { comicId } = this.props.params;

		
		const comic = this.props.comics.find( comic => comic.id == comicId);
		return (
			<div className="single-comic">
				{comic &&
				<div>
					<Comic comic={comic} {...this.props} />
					<ComicInfo comic={comic} {...this.props} />
				</div>
				}
			</div>
		)
	}
});

export default Single;
