import React,{Component} from 'react';
import './skillcontent.css';
class Skill extends Component{
    constructor(props){
        super(props);
        this.skillId=props.skillId;
        this.skillContent =props.skillContent;
        console.log(this.skillContent);
        this.keys=props.keyList;
        this.deleteskill = this.deleteskill.bind(this);
    }
    

    deleteskill(e){
        this.props.deleteskill(this.skillId);
    }
    render(props)
    {
        return(
            <div className="col-md-2 skill fade-in">
                <div className="skillContent">
                    <div className="skill_position">{this.skillContent}</div>
                    <button className="delete_skill" onClick={this.deleteskill}>Delete</button>
                </div>
            </div>
        );
    }

}
export default Skill;