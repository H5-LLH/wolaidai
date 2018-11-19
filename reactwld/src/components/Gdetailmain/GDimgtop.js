import React, {
	Component
} from 'react';
import './GDmain.css'

//import { Link } from "react-router-dom";
class GDimgtop extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pickTab: 0,
			ImgArr: ""    //props里面的topimgArr就是我想要的图片Arr函数
		};
	}



	render() {
		return(
			<div>
			<div className="slider am-carousel">
							<div className="slider-frame slider-framee">
								<ul className="slider-list slider-listt">
									<a className="slider-debb"><img src={this.props.topimg.topimgUrl} /></a>
								</ul>
							</div>
							<div className="slider-decorator-0 slider-decc">
								<div className="am-carousel-wrap">
									<div className="am-carousel-wrap-dot am-carousel-wrap-dot-active"><span></span></div>
								</div>
							</div>
						</div>
						<div className="gap-20"></div>
						<span className="good-title">{this.props.topimg.topimgName}</span>
						<div className="good-rent">
							<div className="good-rent-price"><span className="good-currency">￥</span><span className="good-amount">8.9/日</span><span><span className="good-month line-through">月供￥369</span><span className="good-month red">月供￥269.00</span></span>
							</div>
						</div>
						<div className="good-price"><span className="good-offical">官网售价</span><span className="good-currency">￥</span><span className="good-amount">4,999.00</span></div>
						<div className="line"></div>
			</div>
		)
	}
}
export default GDimgtop;