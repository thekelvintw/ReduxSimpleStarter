
// React is to create on component
import React, {Component} from 'react';
// Apply on the DOM 
// folder ref
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list'

const API_KEY = 'AIzaSyD9oVQ7nbbKa_8SCUZfX8NINSmTqfsj4aE'



// Create a couponent that produce new html
// It's ES6 JS
class App extends Component {
	constructor(props){
		super(props);


		this.state = { videos: [] };

		YTSearch({key:API_KEY, term: 'surfboard'}, (videos) => {
			this.setState( { videos } );
			// ES6{videos :videos}
		})
	}


	render() {
		return (
			<div>
				<SearchBar />
				<VideoList videos = {this.state.videos} />
			</div>
		);
	}
}

// Take the coponent and put it into HTML page(DOm)

// passing instance instead of class
ReactDOM.render(<App />, document.querySelector('.container'))

// One component per file