import React, { Component } from 'react';
import './Interviewer_Dashboard.css';
// import fire from '../Fire';
class Interviewer_Dashboard extends Component {
    constructor() {
        super();
    }
    signOut()
    {
        // fire.auth().signOut();
    }
    render() {
        return (
            <div>
                <nav id="ID_head_nav" class="navbar navbar-inverse">
                    <div class="container-fluid">
                        <div class="navbar-header">
                            <span id="ID_topic">Islot </span>
                        </div>
                        <span id="ID_main_head">Interviewer Dashboard</span>

                        <div class="dropdown" id="ID_settings_page">
                            <a  class="dropdown-toggle" type="button" data-toggle="dropdown"><i id="ID_settings" class="fas fa-cogs"></i>
                            </a>
                            <ul class="dropdown-menu">
                                <li><a id="ID_settings_name" href="#">Profile settings</a></li>
                                <li><a id="ID_settings_name" href="#">Location Management</a></li>
                                <li><a id="ID_settings_name" href="#">Skill Management</a></li>
                            </ul>
                        </div>
                        <button id="ID_logout"class="btn btn-danger" onClick={this.signOut}>Logout</button>

                    </div>

                    
                </nav>
                <div  class="row">
                <div id="ID_box_container"class="col-lg-9 line">
                    <h3 id="ID_rec">Recent Events</h3>
                    <div class="row">
                        <div id="ID_card" class="col-lg-3">
                            <h3 id="ID_card_heading">Angular 4</h3>
                            <h4 id="ID_card_date">25-01-1997</h4>
                            <h4 id="ID_card_start_time">Start Time: <span id="ID_st">10: 00 AM</span></h4>
                            <h4 id="ID_card_stop_time">End Time: <span id="ID_et">1: 00PM</span></h4>
                            <button id="ID_view_data" type="button" class="btn btn-lg btn-success">Click</button>
                        </div>

                           <div id="ID_card" class="col-lg-3">
                            <h3 id="ID_card_heading">Angular 4</h3>
                            <h4 id="ID_card_date">25-01-1997</h4>
                            <h4 id="ID_card_start_time">Start Time: <span id="ID_st">10: 00 AM</span></h4>
                            <h4 id="ID_card_stop_time">End Time: <span id="ID_et">1: 00PM</span></h4>
                            <button id="ID_view_data" type="button" class="btn btn-lg btn-success">Click</button>
                        </div>

                           <div id="ID_card" class="col-lg-3">
                            <h3 id="ID_card_heading">Angular 4</h3>
                            <h4 id="ID_card_date">25-01-1997</h4>
                            <h4 id="ID_card_start_time">Start Time: <span id="ID_st">10: 00 AM</span></h4>
                            <h4 id="ID_card_stop_time">End Time: <span id="ID_et">1: 00PM</span></h4>
                            <button id="ID_view_data" type="button" class="btn btn-lg btn-success">Click</button>
                        </div>

                           <div id="ID_card" class="col-lg-3">
                            <h3 id="ID_card_heading">Angular 4</h3>
                            <h4 id="ID_card_date">25-01-1997</h4>
                            <h4 id="ID_card_start_time">Start Time: <span id="ID_st">10: 00 AM</span></h4>
                            <h4 id="ID_card_stop_time">End Time: <span id="ID_et">1: 00PM</span></h4>
                            <button id="ID_view_data" type="button" class="btn btn-lg btn-success">Click</button>
                        </div>
                        

                    </div>
                    </div>
                    <div class="line">
                        <div id="ID_points" class="col-lg-6">
                        <h2 id="ID_points_head"><i class="fas fa-certificate"></i> Points so far...</h2>
                        <div id="ID_tt_tm">
                        <span id="ID_tt">Total</span>
                        <span id="ID_tm">This Month</span>
                        </div>

                        <div id="ID_tt_tm_v">
                        <span id="ID_tt_v">193</span>
                        <span id="ID_tm_v">26</span>
                        </div>
                        </div>
                    </div>
                    </div>

                    
                



                <div id ="ID_box_container">
                    <h3 id="ID_rec">Upcoming Events</h3>
                    <div class="row">
                        <div id="ID_card_U" class="col-lg-4">
                            <h3 id="ID_card_U_heading">Angular 4</h3>
                            <h4 id="ID_card_U_date">25-01-1997</h4>
                            <h4 id="ID_card_U_start_time">Start Time: <span id="ID_sst">10: 00 AM</span></h4>
                            <h4 id="ID_card_U_stop_time">End Time: <span id="ID_eet">1: 00PM</span></h4>
                            <button id="ID_view_U_data" type="button" class="btn btn-lg btn-warning">Click</button>
                        </div>
                    </div>
                </div>

        
            </div>
        );
    }
}

export default Interviewer_Dashboard;