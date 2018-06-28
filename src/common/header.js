import React,{Component} from 'react';
import './header.css';
export default class Header extends Component{
    render(){
        return(
            <div className="common-header">
                <p className="project-name">iSlot</p>
                <p className="ellipses">
                <span class="glyphicon glyphicon-align-justify place"></span>
                </p>
            </div>
        );
    }
}