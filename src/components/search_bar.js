import React, {Component} from 'react';


class SearchBar extends Component {
	constructor(props){
		super(props);

		this.state = {term: ''};
	}

	render() {
		// Add a event lisener Rect Property onChange
		//only use this.setState
		return (
			<div>
			 <input 
				 value = {this.state.term}
			 	onChange = { event => this.setState({term:event.target.value}) } />
			</div>
		);
	}
}

// const SearchBar = () => {
// 	return <input />; 
// };

export default SearchBar;

