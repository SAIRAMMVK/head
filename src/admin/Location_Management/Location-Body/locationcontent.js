import React,{Component} from 'react';
import './locationcontent.css';
class Location extends Component{
    constructor(props){
        super(props);
        this.locationId=props.locationId;
        this.locationContent =props.locationContent;
        console.log(this.locationContent);
        this.keys=props.keyList;
        this.deletelocation = this.deletelocation.bind(this);
    }
    deletelocation(e){
        this.props.deleteLOC(this.locationId);
    }
    render(props)
    {
        return(
            <div className="col-md-2 location fade-in">
                <div className="locationContent">
                    <div className="location_position">{this.locationContent}</div>
                    <button className="delete_location" onClick={this.deletelocation}>Delete</button>
                </div>
            </div>
        );
    }

}
export default Location;