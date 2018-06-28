import React, {Component} from 'react';
import './skillinput.css';
export default class SkillInput extends Component{
    constructor(props){
        super(props);
        this.state = {
            newSkillContent: '',
            id:0
        };

        this.handleUserInput = this.handleUserInput.bind(this);
        this.writeSkill = this.writeSkill.bind(this);
    }

    // When the user input changes, set the newSkillContent
    // to the value of what's in the input box.
    handleUserInput(e){
        
        this.setState({
            newSkillContent: e.target.value.toUpperCase(), // the value of the text input
        })
    }

    writeSkill(){
        // call a method that sets the SkillContent for a skill to
        // the value of the input
        let ids = this.state.id;
        ids+=1;
        this.props.addSkill(this.state.newSkillContent,ids);

        // Set newSkillContent back to an empty string.
        this.setState({
            newSkillContent: '',
            id:ids
            
        })
    }
    render(){
        return(
            <div className="formWrapper">        
                <input className="SM_skillInput" type="text"
                    placeholder="Enter the skill to add.." id="SM_input"
                    value={this.state.newSkillContent} 
                    onChange={this.handleUserInput}  /><br/>

                <button className="SM_skillButton" disabled={!this.state.newSkillContent} onClick={this.writeSkill} > Add Skill </button>
        </div>
        );
    }
}