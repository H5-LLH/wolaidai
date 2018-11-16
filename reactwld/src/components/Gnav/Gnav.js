import React, {
	Component
} from 'react';
//import './Xfoot.css'
import './Gnav.css'

//import { Link } from "react-router-dom";
class Gnav extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pickTab: 0,
			tabs: ""
		};
	}

	render() {
		return(
			<div>
			<ul className="home-tag">
							<li className="home-tag-item GnavBB">11·11专区</li>
							<li className="home-tag-item GnavSS">超低价专区</li>
							<li className="home-tag-item GnavSS">火爆iPhone</li>
							<li className="home-tag-item GnavSS">热门安卓</li>
							<li className="home-tag-item GnavSS">95新精品</li>
							<li className="home-tag-item GnavSS">商务办公</li>
							<li className="home-underline" style={{left: "1.25rem"}}></li>
						</ul>
			</div>
		)
	}
}
export default Gnav;