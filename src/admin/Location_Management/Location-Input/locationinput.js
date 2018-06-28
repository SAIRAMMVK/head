import React, {Component} from 'react';
import './locationinput.css';
export default class LocationInput extends Component{
    constructor(props){
        super(props);
        this.state = {
            newLocationContent: '',
            id:0
        };

        this.handleUserInput = this.handleUserInput.bind(this);
        this.writeLocation = this.writeLocation.bind(this);
    }

    // When the user input changes, set the newLocationContent
    // to the value of what's in the input box.
    handleUserInput(e){
        
        this.setState({
            newLocationContent: e.target.value.toUpperCase(), // the value of the text input
        })
    }

    writeLocation(){
        // call a method that sets the LocationContent for a location to
        // the value of the input
        let ids = this.state.id;
        ids+=1;
        this.props.addLocation(this.state.newLocationContent,ids);

        // Set newLocationContent back to an empty string.
        this.setState({
            newLocationContent: '',
            id:ids
            
        })
    }
    render(){
        return(
            <div className="formWrapper">        
                <input className="SM_locationInput" type="text"
                    placeholder="Enter the location to add.." id="SM_input"
                    value={this.state.newLocationContent} 
                    onChange={this.handleUserInput}  /><br/>

                <button className="LM_locationButton" disabled={!this.state.newLocationContent} onClick={this.writeLocation} > Add Location </button>
        </div>
        );
    }
}