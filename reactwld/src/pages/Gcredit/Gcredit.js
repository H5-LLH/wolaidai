import React, {
	Component
} from 'react';
//import './Xfoot.css'
import '../../assets/wldbase.css'
import '../../assets/credit.css'

import { Route } from "react-router-dom";

import Gheader from '../../components/Gheader/Gheader';
import Gcategory from '../../components/Gcategory/Gcategory';
import Gnav from '../../components/Gnav/Gnav';
import Glist from '../../components/Glist/Glist';
import Gfoot from '../../components/Gfoot/Gfoot';
//import { Link } from "react-router-dom";
class Gcredit extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pickTab:0,
			tabs:""
		};
	}   
	
	render() {
		return(
			<div>
			<div className="app-container">
				<div className="route-container">
					<div className="home-container">
						<Gheader />
						<Gcategory />
						<Gnav />
						<Glist />
						<Gfoot />
					</div>
				</div>
			</div>
		</div>
		)
	}
}
export default Gcredit;