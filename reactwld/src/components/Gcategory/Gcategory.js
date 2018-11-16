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
							<li><img src="https://welab.oss-cn-shenzhen.aliyuncs.com/production/api/rocket2/public/system/documents/1a/53/5de319e458d36819b583cfbf42941fcc15d1/category_icon_original.png?Expires=1542378356&amp;OSSAccessKeyId=LTAIZeL07SeAtFXG&amp;Signature=NKLt2hn3q321c0rinKzhg4AWSjQ%3D" /><span>砍价专区</span></li>
							<li><img src="https://welab.oss-cn-shenzhen.aliyuncs.com/production/api/rocket2/public/system/documents/09/58/14b376d4dd40e0f25d61af80b422d25fb05f/category_icon_original.png?Expires=1542378356&amp;OSSAccessKeyId=LTAIZeL07SeAtFXG&amp;Signature=kZO%2BvZtM3YHLYC8i%2B4vOCT0gGy8%3D" /><span>超值促销</span></li>
							<li><img src="https://welab.oss-cn-shenzhen.aliyuncs.com/production/api/rocket2/public/system/documents/f8/b6/a81cf5372ac5e5786cb9bd3ad1950614d882/category_icon_original.png?Expires=1542378356&amp;OSSAccessKeyId=LTAIZeL07SeAtFXG&amp;Signature=aD6Sn54ocD21YolgvFzrT18wxWw%3D" /><span>电脑平板</span></li>
							<li><img src="https://welab.oss-cn-shenzhen.aliyuncs.com/production/api/rocket2/public/system/documents/56/a6/6eaeea4af7479f23fd2cadb501c645df61df/category_icon_original.png?Expires=1542378356&amp;OSSAccessKeyId=LTAIZeL07SeAtFXG&amp;Signature=SXhVmehOjdnJsAIoKIF7%2BnY2WTI%3D" /><span>95新精品</span></li>
						</ul>
				<div className="gap-20"></div>
			</div>
		)
	}
}
export default Gcategory;