import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import thunk from 'redux-thunk';

import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from 'redux';

import UsersIndex from "./Users";
import UsersNew from "./UsersNew";

import rootReducer from './reducers';
import { fetchAllUsers } from './actions/index';

const store = createStore(rootReducer, applyMiddleware(thunk));

store.dispatch(fetchAllUsers());

ReactDOM.render(
	<Provider store={store}>
    	<BrowserRouter>
      <div>
        <Switch>
          <Route path="/users/new" component={UsersNew} />
          <Route path="/" component={UsersIndex} />
        </Switch>
      </div>
    </BrowserRouter>
  	</Provider>, document.getElementById("root"));
