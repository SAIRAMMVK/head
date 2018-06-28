import React, { Component } from 'react';
import Location from './Location-Body/locationcontent';
import LocationInput from './Location-Input/locationinput';
import Header from '../../common/header';

class MainLocation extends Component {
    constructor(props) {
        super(props);
        this.addLocation = this.addLocation.bind(this);
        this.state = {
            dat: [],
            keys:[]

        }
        this.deleteloc=this.deleteloc.bind(this);
        this.fetchData=this.fetchData.bind(this);
    }

    addLocation(location, id) {
        const newsk = {
            LocationName: location
        }
        this.setState({
            dat: this.state.dat.concat(newsk)
        })


        fetch(`https://perl-react-project.firebaseio.com/locationmanagemen.json`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "LocationId": id,
                "LocationName": location

            })
        })

    }
    fetchData(){
        const self = this;
        fetch("https://perl-react-project.firebaseio.com/locationmanagemen.json").then(response => response.json())
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
    deleteloc(id){
        console.log("main_location"+id);
        fetch("https://perl-react-project.firebaseio.com/locationmanagemen.json")
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
                        if(objects.LocationId===id){
                            console.log("in if cond"+objects);
                            fetch("https://perl-react-project.firebaseio.com/locationmanagemen/"+k+".json",{
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
                        <h3>LOCATION MANAGEMENT</h3>
                    </div>
                    <div className="location_input">
                        <LocationInput addLocation={this.addLocation} />
                    </div>
                    <div className="locationBody">
                        {
                            this.state.dat.map((location) => {
                                if (location.locationContent == "") { }
                                else {
                                    return (
                                        <Location deleteLOC={this.deleteloc}locationContent={location.LocationName} locationId={location.LocationId} keyList={this.state.keys} />
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
export default MainLocation;