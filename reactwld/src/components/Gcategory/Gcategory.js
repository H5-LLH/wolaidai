import React, {
	Component
} from 'react';
//import './Xfoot.css'

//import { Link } from "react-router-dom";
class Gcategory extends Component {
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
				<ul className="home-category">
							<li><img src="https://welab.oss-cn-shenzhen.aliyuncs.com/production/api/rocket2/public/system/documents/1a/53/5de319e458d36819b583cfbf42941fcc15d1/category_icon_original.png?Expires=1542527067&OSSAccessKeyId=LTAIZeL07SeAtFXG&Signature=TyKzrdXp0NN9/RTbwG1uedjQ3uI%3D" alt="" /><span>砍价专区</span></li>
							<li><img src="https://welab.oss-cn-shenzhen.aliyuncs.com/production/api/rocket2/public/system/documents/09/58/14b376d4dd40e0f25d61af80b422d25fb05f/category_icon_original.png?Expires=1542527067&OSSAccessKeyId=LTAIZeL07SeAtFXG&Signature=OGxxfnhBYt5pL/174N7AnSl7qvw%3D" alt="" /><span>超值促销</span></li>
							<li><img src="https://welab.oss-cn-shenzhen.aliyuncs.com/production/api/rocket2/public/system/documents/f8/b6/a81cf5372ac5e5786cb9bd3ad1950614d882/category_icon_original.png?Expires=1542527067&OSSAccessKeyId=LTAIZeL07SeAtFXG&Signature=tKP2Ws9v3G%2BNm4kQIoKFozcVQRE%3D" alt="" /><span>电脑平板</span></li>
							<li><img src="https://welab.oss-cn-shenzhen.aliyuncs.com/production/api/rocket2/public/system/documents/56/a6/6eaeea4af7479f23fd2cadb501c645df61df/category_icon_original.png?Expires=1542527067&OSSAccessKeyId=LTAIZeL07SeAtFXG&Signature=Vr3b3MPdat83GbMqQFSjiNJEOpg%3D" alt="" /><span>95新精品</span></li>
						</ul>
				<div className="gap-20"></div>
			</div>
		)
	}
}
export default Gcategory;