import React, { Component } from 'react';
import Skill from './Skill-Body/skillcontent';
import SkillInput from './Skill-Input/skillinput';
import Header from '../../common/header';

class MainSkill extends Component {
    constructor(props) {
        super(props);
        this.addSkill = this.addSkill.bind(this);
        this.state = {
            dat: [],
            keys:[]

        }
        this.deleteskill=this.deleteskill.bind(this);
        this.fetchData=this.fetchData.bind(this);
    }

    addSkill(skill, id) {
        const newsk = {
            SkillName: skill
        }
        this.setState({
            dat: this.state.dat.concat(newsk)
        })


        fetch("https://perl-react-project.firebaseio.com/skillmanagemen.json", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "SkillId": id,
                "SkillName": skill

            })
        })

    }
    fetchData(){
        const self = this;
        fetch("https://perl-react-project.firebaseio.com/skillmanagemen.json").then(response => response.json())
            .then(data => {
                if (data === null) { }
                else {
                    let l = Object.keys(data);
                    let objects = []
                    for (var i = 0; i < l.length; i++) {
                        var k = l[i];
                        objects[i] = data[k]
                    }
                    console.log(objects)
                    this.setState({
                        dat: objects,
                        keys:l
                    })
                    console.log(this.state.dat)
                    //console.log(this.state.keys)
                }
            })
    }
    componentDidMount() {
        this.fetchData()
    }
    deleteskill(id){
        console.log("main_skill"+id);
        fetch("https://perl-react-project.firebaseio.com/skillmanagemen.json")
        .then(response=>response.json())
        .then(
            data=>{
                if(data!==null){
                    var l =Object.keys(data);
                    console.log(l);
                    let objects={};
                    for(var i=0;i<l.length;i++){
                        console.log("in for loop")
                        var k = l[i];
                        console.log("after asssigining k"+k)
                        objects= data[k];
                        console.log("in objects before if cond"+objects)
                        console.log(objects);
                        if(objects.SkillId===id){
                            console.log("in if cond"+objects);
                            fetch("https://perl-react-project.firebaseio.com/skillmanagemen/"+k+".json",{
                                method: 'DELETE'
                            }).then(res=>this.fetchData())
                            
                        }
                    }
                }
            })         
    }
    render() {
        return (
            <div className="App">
                <center>
                    <div className="header">
                        <Header />
                    </div>
                    <div>
                        <h3>SKILL MANAGEMENT</h3>
                    </div>
                    <div className="skill_input">
                        <SkillInput addSkill={this.addSkill} />
                    </div>
                    <div className="skillBody">
                        {
                            this.state.dat.map((skill) => {
                                if (skill.skillContent == "") { }
                                else {
                                    return (
                                        <Skill deleteskill={this.deleteskill}skillContent={skill.SkillName} skillId={skill.SkillId} keyList={this.state.keys} />
                                    )
                                }
                            })
                        }
                    </div>
                </center>
            </div>
        );
    }
}
export default MainSkill;