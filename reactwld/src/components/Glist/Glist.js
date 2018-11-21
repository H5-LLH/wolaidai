import React, {
	Component
} from 'react';
//import './Xfoot.css'

import {connect} from 'react-redux';
import { Link } from "react-router-dom";
class Glist extends Component {
	constructor(props) {
		super(props);
		this.state = {
			goodslist:""
		};
	}

	listFirstLoad(){
		React.axios({
			method: 'get',
			url: "https://mf.wolaidai.com/lease/api/v1/goods/19/spus"
		}).then((response) => {
			//console.log(response.data.result);
			
			this.setState({
				goodslist:response.data.result
			})

		}).catch((error) => {
			console.log(error)
		})
	}
	componentDidMount() {
		this.listFirstLoad();
	}
	//生命周期
	componentWillReceiveProps(){
		//使用定时器可以。强制实时更新
		setTimeout(()=>{
		//console.log(this.props.navId)
		let aaa= "https://mf.wolaidai.com/lease/api/v1/goods/"+this.props.navId+"/spus"
		React.axios({
		method: 'get',
		url: aaa
		}).then((response) => {
			//console.log(response.data.result);
			
			this.setState({
				goodslist:response.data.result
			})

		}).catch((error) => {
			console.log(error)
		})
		},10)
		
	}
	
	
	//==================分割线===============================
	render() {
		return(
			<div className="home-list" id={this.props.navId}>
				{
					(()=>{
						if(this.state.goodslist.length>0){
							return this.state.goodslist.map((item,index)=>{
								return (
								<Link to={`/detail/?gdid=${item.id}`} className="home-item" key={item.id}>
									<img src={item.primaryImagePath} alt="" />
									<div className="home-info">
									<span className="cut-price-container">
									<span className="home-name cut-price">{item.spuName}</span>
									<span className="cut">砍</span>
									</span>
									<span className="home-month">月供最低约<span className="home-currency">￥</span>
									<span className="home-price">{`${item.rent}.00`}</span>
									</span>
									</div>
								</Link>
								)
							})
						}
					})()
				}
		
			</div>
		)
	}
}
export default connect(
	(state)=>{
		return state;
	},
	(dispatch)=>{
		return {}
})(Glist);