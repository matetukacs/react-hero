

const comics = (state = [], { type, comics}) => {

  
	switch(type) {
		case 'COMICS_FETCHED' :
			return [
				...comics,
				...state
			]
		default:
			return state;
	}
}

export default comics;
