import React,{Component} from 'react';
import {Pie} from 'react-chartjs-2';
import './analytics.css';
import Header from '../common/header';

const Graph = (props) => {
const data = {
	labels: [
		'Java',
		'JavaScript',
		'React JS'
	],
	datasets: [{
		data: [300, 50, 100],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		]
	}]
};
return(
    <Pie data={data} height={70}/>
);
}

export default class Chart extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <Header/>
                <div className="first-div">
                    <div className="chart" id="chart">
                        <Graph/>
                    </div>
                    <div className="months">
                        <p>Analysis For The Month:</p>
                        <select >
                            <option>June</option>
                            <option>July</option>
                            <option>August</option>
                        </select>
                    </div>
                </div>
                <div className="second-div">
                   <div class="bottom_division hide-result" id="div1">
                        <div class="inner" id="1">
                            <div class="inner_contents" id="11">
                               <ul> JavaScript</ul>
                               <p class="a"> sudheer   <i class="fas fa-bolt"></i>  232<br/><br/></p>
                               <p class="a"> kumar  <i class="fas fa-bolt"></i>  156<br/><br/></p>
                               <p class="a">  kishor <i class="fas fa-bolt"></i>  132<br/><br/></p>
                            
                             </div>
                         </div>
                        <div class="inner" id="2">
                            <div class="inner_contents" id="12">
                            <ul> Java</ul>
                               <p class="a"> antar   <i class="fas fa-bolt"></i>  32<br/><br/></p>
                               <p class="a"> shanu  <i class="fas fa-bolt"></i>  56<br/><br/></p>
                               <p class="a">  karthik <i class="fas fa-bolt"></i>  132<br/><br/></p>
                            </div>

                        </div>
                        <div class="inner" id="3">
                            <div class="inner_contents" id="13">
                            <ul id="A_ul"> React Js</ul>
                               <p class="a"> abhi   <i class="fas fa-bolt"></i> 132<br/><br/></p>
                               <p class="a"> sam <i class="fas fa-bolt"></i>  56<br/><br/></p>
                               <p class="a">  arav  <i class="fas fa-bolt"></i>  132<br/><br/></p>
                            </div>

                        </div>

                </div>
            </div>
        </div>
        );
    }
}