import React, { Component } from 'react';
import './profile.css';
class Profile extends Component {
    constructor(props){
        super(props);
        this.state={
            mobile:'',
            password:''
        }
        this.updates = this.updates.bind(this);
        this.change = this.change.bind(this); 
    }
    change(event){

    }
    updates(){
        console.log("welcome");
    }
    render() {
        return (
            <div className="profile-settings">
                <form onSubmit={this.updates}>
                    <fieldset className="fieldset1">
                    <legend className="legend1"> Profile Settings </legend>
                        <div class="form-group">
                            <label for="name" class="cols-sm-2 control-label">Name</label>
                            <div class="cols-sm-10">
                                <div class="input-group">
                                    <span class="input-group-addon"><i class="fa fa-user fa"></i></span>
                                    <input type="text" class="form-control" name="name"
                                     value="sairam"   id="name" placeholder="Enter your Name" disabled />
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="name" class="cols-sm-2 control-label">Email</label>
                            <div class="cols-sm-10">
                                <div class="input-group">
                                    <span class="input-group-addon"><i class="fa fa-envelope fa"></i></span>
                                    <input type="text" class="form-control" name="name"
                                    value="sairam@virtusa.com"    id="name" placeholder="Enter your Name" disabled />
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label for="mobile" class="cols-sm-2 control-label">MobileNumber</label>
                            <div class="cols-sm-10">
                                <div class="input-group">
                                    <span class="input-group-addon"><i class="fa fa-mobile-phone fa-lg" aria-hidden="true"></i></span>
                                    <input type="text" class="form-control" name="mobile" 
                                    onChange={this.change}  id="mobile" placeholder="Enter your MobileNumber"/>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="password" class="cols-sm-2 control-label">Password</label>
                            <div class="cols-sm-10">
                                <div class="input-group">
                                    <span class="input-group-addon"><i class="fa fa-lock fa-lg" aria-hidden="true"></i></span>
                                    <input type="password" class="form-control" name="password" id="pwd" placeholder="Enter your Password" />
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <input type="submit" value="Update Profile"/>
                        </div>
                    </fieldset>
                </form>
            </div>
        );
    }
}
export default Profile;