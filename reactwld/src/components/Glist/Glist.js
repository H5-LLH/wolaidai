import React, {
	Component
} from 'react';
//import './Xfoot.css'

//import { Link } from "react-router-dom";
class Glist extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pickTab: 0,
			tabs: ""
		};
	}

	render() {
		return(
			<div className="home-list">
							<div className="home-item"><img src="https://welab.oss-cn-shenzhen.aliyuncs.com/production/api/rocket2/public/system/documents/8c/53/515d26c08040e65459422f81ebaf1f5228f3/spu_list_display_original.png?Expires=1542527067&OSSAccessKeyId=LTAIZeL07SeAtFXG&Signature=Xquw4u5Nd/UYwP6Xk7o6s33WPKI%3D" alt="" />
								<div className="home-info"><span className="cut-price-container"><span className="home-name cut-price">Apple iPad 2018年新款9.7英寸</span><span className="cut">砍</span></span><span className="home-month">月供最低约<span className="home-currency">￥</span><span className="home-price">178.00</span></span>
								</div>
							</div>
							
							<div className="home-item"><img src="https://welab.oss-cn-shenzhen.aliyuncs.com/production/api/rocket2/public/system/documents/fc/c0/841560a7be3503cb72603b40618cd9cdb8b5/spu_list_display_original.png?Expires=1542527067&OSSAccessKeyId=LTAIZeL07SeAtFXG&Signature=sQinYQL9Z3nP6ZJhnt0iba0l6kg%3D" alt="" />
								<div className="home-info"><span className="cut-price-container"><span className="home-name cut-price">华为 HUAWEI Mate 20 X</span><span className="cut">砍</span></span><span className="home-month">月供最低约<span className="home-currency">￥</span><span className="home-price">298.00</span></span>
								</div>
							</div>
						
						</div>
		)
	}
}
export default Glist;