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
			tabs: "",
			detailObj:"",
			topimg:"",
			tabsImg:"",
			tabsImgcs:"",
			tabsImgfw:""
		};
	}

	loadMore() {
		//		let postData = React.qs.stringify({
		//					page: 4,
		//					limit: 10
		//				});
		React.axios({
			method: 'get',
			url: "https://mf.wolaidai.com/lease/api/v1/goods/106/detail"
		}).then((response) => {
			console.log(response.data.result);
			
			this.setState({
				
				detailObj: response.data.result,
				topimg:response.data.result.spuDocument.spuPrimarys[0].documentUrl,
				tabsImg:response.data.result.spuDocument.spuDetails,
				tabsImgcs:response.data.result.spuDocument.spuParams[0],
				tabsImgfw:response.data.result.spuDocument.leaseExplanations[0]
				
			})

		}).catch((error) => {
			console.log(error)
		})
	}
	//react的生命周期
	componentDidMount() {
		this.loadMore();
	}

	render() {
		return(
			<div className="route-container">
				<div className="good-container">
					<GDimgtop topimg={{topimgUrl:this.state.topimg,topimgName:this.state.detailObj.spuName}} />
					<GDservice />
					<GDtabs tabsimg={{imgjs:this.state.tabsImg,imgcs:this.state.tabsImgcs,imgfw:this.state.tabsImgfw}} />
					<GDsummary />
				</div>
			</div>
		)
	}
}
export default Gdetail;