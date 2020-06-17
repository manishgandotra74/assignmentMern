import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './redux/reducers/combine-reducers';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { BrowserRouter as Router, Route, Switch, useHistory } from "react-router-dom";
// import UsersList from './Components/UsersList';
import UserUpdate from './components/UserUpdate';
import User from './components/User';
// import UserUpdate from './Components/UserUpdate';

const store = createStore(reducer, compose( applyMiddleware(thunk), window.devToolsExtension ? window.devToolsExtension() : f => f
  ));
ReactDOM.render(  
<Provider store={store}>
<Router history ={useHistory}>
      <Switch>
      {/* <Route path="/"> <Userslist /></Route> */}
      <Route path="/editUser/:id"><UserUpdate /></Route> 
      <Route path="/addUser"> < UserUpdate/> </Route>
      <Route path="/"> < User/> </Route>

      </Switch>
        
            </Router>
      </Provider>,
   document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
