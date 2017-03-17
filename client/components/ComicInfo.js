import React from 'react';

const ComicInfo = React.createClass({
	renderDescription(description) {
		return (
			<div className="comicInfo">
				<p>
					<strong>Description</strong>
					<br/>
					{description}
				</p>
			</div>
		)
	},
	render() {
		return (
			<div className="comicInfo">
				{this.renderDescription(this.props.comic.description)}
			</div>
		)
	}
});

export default ComicInfo;
