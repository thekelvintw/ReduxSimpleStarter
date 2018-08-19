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
			<div className = "search-bar">
			 <input 
				 value = {this.state.term}
			 	onChange = { event => this.onInputChange(event.target.value) } />
			</div>
		);
	}


	onInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(term)

	}
}

// const SearchBar = () => {
// 	return <input />; 
// };

export default SearchBar;

