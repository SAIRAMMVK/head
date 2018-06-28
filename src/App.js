import React, { Component } from 'react';
import './App.css';
import MainSkill from './admin/Skill_Management/main_skill';
import MainLocation from './admin/Location_Management/main_location';
import Form from './DriveRegistration/DriveRegistration';
import './DriveRegistration/DriveRegistration.css';
import Interviewer_Dashboard from './Interviewer_Dashboard/Interviewer_Dashboard';
import Event_Detail from './Event_Detail/Event_Detail';
import Interviewer_Event from './Interviewer_Event/Interviewer_Event';
 import HomePage from './HomePage/HomePage';
import AdminReg from './admin/admin-registration';
import InterviewerReg from './interviewer/registration';
import Chart from './admin/analytics';
import Header from './common/header';
import Profile from './common/profile';
class App extends Component {
 

  render() {
    return (

      <div>
       
        {/* <MainSkill/> */}
        {/* <MainLocation/> */}
        {/* <HomePage/> */} 
        {/* <InterviewerReg/>  */}
        <AdminReg/>
         {/* <Chart/> */}
        {/*<Form
            updateFormStatus={this.updateFormStatus}
            updateFormState={this.updateFormState}
          /> */}
          </div>

    );
  }
}

export default App;
