import React from 'react';
import { Link } from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';

const Comic = React.createClass({
	render() {
		const { comic } = this.props;
		return (
			<figure className = "grid-figure">
				<div className="grid-comic-wrap">
					<Link to={`/view/${comic.id}`}>
						{comic.thumbnail &&
						<img src={`${comic.thumbnail.path}/portrait_incredible.jpg`} alt={comic.title} className="grid-comic" />
						}
					</Link>
				</div>

				<figcaption>
					<p>{comic.title}</p>
				</figcaption>
			</figure>
		)
	}
});

export default Comic;
