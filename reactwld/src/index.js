import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
//import './assets/wldbase.css'
//import './assets/credit.css'
//import App from './App';
import { HashRouter as Router, Route, Redirect } from "react-router-dom";
import axios from 'axios';
import qs from 'qs'

import {Provider, connect} from 'react-redux';
import {createStore} from 'redux';

import Gcredit from './pages/Gcredit/Gcredit';


import * as serviceWorker from './serviceWorker';


//创建store仓库
const store = createStore(function(state = {
  count: 0,
  ggtext:"嘻嘻"
}, action) {
  const count = state.count
  switch (action.type) {
	//使用示例
    case 'multi':
      return Object.assign({}, state, {name: action.name});
    case 'DDtext':
      return {
        ...state,
        ggtext: action.ggtext
      };
    default:
      return state
  }
});



React.axios = axios; //react中全局引入插件的方式
React.qs = qs;
ReactDOM.render(
	<Provider store={store}>
		<Router>
			<div>
				
				<Route path="/credit/" component={Gcredit} />
				
			</div>
		</Router >
	</Provider>
	, document.getElementById('root'));


serviceWorker.unregister();
