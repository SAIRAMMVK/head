import React, { Component } from 'react';
import './Interviewer_Event.css';
class Interviewer_Event extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div id="IE_body">

                <div class="container box1">
                    <div class="row">
                        <div class="col-lg-3"><p id="IE_time1"><i class="fas fa-clock">&nbsp;&nbsp;</i> <span id="IE_time2">25-06-1997</span></p></div>
                        <div class="col-lg-3"> <p id="IE_count">9</p></div>
                        <div class="col-lg-3">
                            <div id="IE_tog">
                                <label class="switch">
                                    <input type="checkbox" />
                                    <span class="slider round"></span>
                                </label></div>
                        </div>
                        <div class="col-lg-3">
                            <h4 id="IE_tot"> <span >Total Interviews </span>
                            <input type="text" class="form-control" id="IE_total"/>
                            </h4>
                        </div>
                    </div>
                </div>

                <button id="IE_upd" type="button" class="btn btn-lg btn-success">Update</button>
            </div>

        );
    }

}
export default Interviewer_Event;


