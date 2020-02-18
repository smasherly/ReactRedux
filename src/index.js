import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar'; //file reference ./ means current directory
import VideoList from './components/video_list';

const API_KEY = `${process.env.REACT_APP_API_KEY}`



// Create new component. This component should produce some HTML
class App extends Component {
    constructor(props) {
        super(props)

        this.state = { videos: [] };
        
        YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
            this.setState ({ videos });
            //this.setState ({ videos: videos }); when the key and the property are the same name
            
        });
    }

    render() {
        return ( 
            <div>
                <SearchBar / >
                <VideoList videos= {this.state.videos}/> 
                {/* //passing props from parent to child */}
            </div>
        );
    }
}


// Take this compenent's generated HTML and put it on the page (in the DOM)
ReactDOM.render( < App / > , document.querySelector('.container')); 
//Go render instance of App and inserter into container class