import React, { Component } from 'react'; //Means import React and pull of Component as a variable called component. Same as:
//Const Component = React.Component;



class SearchBar extends Component {   //Define a new class called SearchBar and give it access to all the functionality that React has.  Give serachbar all the functionality of React class

    constructor(props) { //this is how we define/initialize state in a class based component
        super(props);

        this.state = { term: ''}; // this.state = an object
    }

    render () {
        return (
            <div>
                
                <input 
                value = {this.state.term}
                onChange={ event => this.setState({ term: event.target.value })} /> 
                {/* manipluates state object
                create new input element, pass it a property with a value this.onInputChange, event handler. Have to pass the eventhandler to the element we want to monitor
                onChange is a React defined property, can look up more in docs */}
            
            {/* Value of the input: {this.state.term} not changing value of term just referencing it */}
            </div>
        );
    }

    // event handler which is a method on the class SearchBar
    // onInputChange(event) { //event handlers are called with event object
    //     console.log(event.target.value);
    // }

}

export default SearchBar; //any file that imports SearchBar will get SearchBar componenet