import React from 'react';
import { Link } from 'react-router';
import { fetchComics } from '../marvelApi'

const Main = React.createClass({
	componentWillMount() {
		fetchComics().then(this.props.comicsFetched);
	},
	render() {
		return (
			<div>
				{React.cloneElement(this.props.children, this.props)}
			</div>
		)
	}
});

export default Main;
