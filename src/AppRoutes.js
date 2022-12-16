import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import AddPdr from "./pages/AddPdr";
import IndexPage from "./pages/IndexPage";
import Contact from "./pages/Contact";

const AppRoutes = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={IndexPage} />
        <Route exact path="/add-pdr" component={AddPdr} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
};

export default AppRoutes;
