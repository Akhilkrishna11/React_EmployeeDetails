import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from './App';
import LoginForm from './LoginForm';

const routes= (
  <Router>
    <Router >
       <Route exactpath = "/" component = {LoginForm}>
          <Route path = "/home" exact component = {LoginForm} />
          <Route path = "/employeeList" exact component = {App} />
       </Route>
    </Router>
  </Router>
);
export default routes;