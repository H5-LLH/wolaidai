import React, {
	Component
} from 'react';
//import './Xfoot.css'

//import { Link } from "react-router-dom";
class Gcategory extends Component {
	constructor(props) {
		super(props);
		this.state = {
			cateArr:""
		};
	}

	firstLoad(){
		React.axios({
			method: 'get',
			url: "https://mf.wolaidai.com/lease/api/v1/goods/category/list"
		}).then((response) => {
			//console.log(response.data.result);
			this.setState({
				cateArr:response.data.result
			})
		}).catch((error) => {
			console.log(error)
		})
	}
	//react的生命周期
	componentDidMount() {
		this.firstLoad();
	}
	//==================分割线===============================
	render() {
			return(
			<div>
				<ul className="home-category">
					{
						(()=>{
							if(this.state.cateArr.length>0){
							return this.state.cateArr.map((item,index)=>{
							return (<li key={index}><img src={item.categoryIcoPath} alt="" />
							<span>{item.categoryName}</span>
							</li>)
							})
							}
							
						})()
					}
					
					
				
						</ul>
				<div className="gap-20"></div>
			</div>
		)
	}
}
export default Gcategory;