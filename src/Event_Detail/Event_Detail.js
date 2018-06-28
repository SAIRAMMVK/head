import React, { Component } from 'react';
import './Event_Detail.css';

class Event_Detail extends Component {
  render() {
    return (
      <div >
        <nav id="ID_head_nav" class="navbar navbar-inverse">
          <div class="container-fluid">
            <div class="navbar-header">
              <span id="ID_topic">Islot </span>
            </div>
            <span id="ID_main_head">Angular walk in</span>

            <div class="dropdown" id="ID_settings_page">
              <a class="dropdown-toggle" type="button" data-toggle="dropdown"><i id="ID_settings" class="fas fa-cogs"></i>
              </a>
              <ul class="dropdown-menu">
                <li><a id="ID_settings_name" href="#">Profile settings</a></li>
                <li><a id="ID_settings_name" href="#">Location Management</a></li>
                <li><a id="ID_settings_name" href="#">Skill Management</a></li>
              </ul>
            </div>

          </div>


        </nav>

        <ul class="nav nav-pills">
          <li class="active"><a data-toggle="pill" href="#ED_view"><span id="ED_V">View</span></a></li>
          <li><a data-toggle="pill" href="#ED_update"><span id="ED_U">Update</span></a></li>

        </ul>

        <div class="tab-content">
          <div id="ED_view" class="tab-pane fade in active">
            <div class="container" id="ED_viewpage">
              <h3 id="ED_timeslots">9AM - 10AM</h3>
              <h3 id="ED_points">56</h3>
              <div class="row" id="ED_inside">
                <div class="col-lg-6" id="ED_insidecontent">
                  <i class="fas fa-user-circle" id="ED_inside_i"></i>
                  <span id="ED_inside_span">  dhinesh</span>
                </div>
                <div class="col-lg-6" id="ED_insidecontent">
                  <i class="fas fa-user-circle" id="ED_inside_i"></i>
                  <span id="ED_inside_span">  dhinesh</span>
                </div>
                <div class="col-lg-6" id="ED_insidecontent">
                  <i class="fas fa-user-circle" id="ED_inside_i"></i>
                  <span id="ED_inside_span">  dhinesh</span>
                </div>
                <div class="col-lg-6" id="ED_insidecontent">
                  <i class="fas fa-user-circle" id="ED_inside_i"></i>
                  <span id="ED_inside_span">  dhinesh</span>
                </div>

              </div>
            </div>

          </div>
          <div id="ED_update" class="tab-pane fade">
            <div class="container row" id="ED_updatepage">
              <div class="col-lg-4">
                <h4 id="ED_name">  Dhinesh  </h4>
              </div>
              <div class="col-lg-4">
                <h4 id="ED_updatepoints"><span>  52</span>  </h4>
              </div>
              <div class="col-lg-4">
                <button class="btn  btn-primary" id="ED_update">Approve</button>
                            </div>
              </div>
              <button id="ED_updatebutton" class="btn btn-lg btn-success">Close Event</button>
            </div>

          </div>
        </div>
        );
      }
    }
    
    export default Event_Detail;
