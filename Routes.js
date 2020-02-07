import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from './App';
import LoginForm from './LoginForm';

const routes= (
    <Router>
    <Router>
      <Route path="/" exact={true} component={LoginForm}/>
      <Route path="/employeeList" exact={true} component={App}/>
    </Router>
  </Router>
);
export default routes;