import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Cadastro from './Cadastro';
import App from './App';


function AppRouter() {
  return (
    <Router>
      <div>
        <Route path="/" exact component={App} />
        <Route path="/cadastro/" component={Cadastro} />
      </div>
    </Router>
  );
}

export default AppRouter;