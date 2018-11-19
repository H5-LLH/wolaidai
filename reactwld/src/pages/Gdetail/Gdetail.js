import React, {
	Component
} from 'react';
//import './Xfoot.css'

import { Route } from "react-router-dom";

import GDimgtop from '../../components/Gdetailmain/GDimgtop';
import GDservice from '../../components/Gdetailmain/GDservice';
import GDtabs from '../../components/Gdetailmain/GDtabs';
import GDsummary from '../../components/Gdetailmain/GDsummary';
//import { Link } from "react-router-dom";
class Gdetail extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pickTab: 0,
			tabs: ""
		};
	}

	render() {
		return(
			<div className="route-container">
				<div className="good-container">
					<GDimgtop />
					<GDservice />
					<GDtabs />
					<GDsummary />
				</div>
			</div>
		)
	}
}
export default Gdetail;