import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import AddPdr from "./pages/AddPdr";
import IndexPage from "./pages/IndexPage";
import Contact from "./pages/Contact";
import MyMaps from "./pages/MyMaps";

const AppRoutes = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={IndexPage} />
        <Route exact path="/add-pdr" component={AddPdr} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/maps" component={MyMaps} />
      </Switch>
    </Router>
  );
};

export default AppRoutes;
