import React, {
	Component
} from 'react';
//import './Xfoot.css'

//import { Link } from "react-router-dom";
class GDtabs extends Component {
	constructor(props) {
		super(props);
		this.state = {
			
		};
	}
	
	render() {
		return(
			<div>
				<div className="good-tab">
					<button className="good-tab-true">商品介绍</button>
					<button className="good-tab-false">规格参数</button>
					<button className="good-tab-false">服务说明</button>
					<div className="good-underline" style={{left: "16.1%"}}></div>
				</div>
				
				<div className="good-content">
							<div style={{display: "block"}}>
							{
								(()=>{
									let arr = this.props.tabsimg.imgjs;
									if(arr.length>0){
										return arr.map((item,index)=>{
											return (
												<img src={item.documentUrl} alt="" key={index}/>					
											)
										})
									}
								})()
							}
							
							</div>
							<div style={{display: "none"}}>
								<img src={this.props.tabsimg.imgcs.documentUrl} alt="" />
							</div>
							<div style={{display: "none"}}>
								<img src={this.props.tabsimg.imgfw.documentUrl} alt="" />
							</div>
						</div>
				
			</div>
		)
	}
}
export default GDtabs;