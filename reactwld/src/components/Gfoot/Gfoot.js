import React, {
	Component
} from 'react';
//import './Xfoot.css'

//import { Link } from "react-router-dom";
class Gfoot extends Component {
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
				<ul className="tab-container">
					<li className="active"><img src="https://mf.wolaidai.com/aif-lease/file/d315c7496dbbfb878dda54aae360e2b9.png" alt="" />首页</li>
					<li className="active"><img src="https://mf.wolaidai.com/aif-lease/file/58ae73537bfd5221bfa1da3f518b9a91.png" alt="" />我的订单</li>
					<li className="active"><img src="https://mf.wolaidai.com/aif-lease//file/f73487ca823a7467e4475197ae63f750.png" alt="" />账户</li>
				</ul>
			</div>
		)
	}
}
export default Gfoot;