import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import AddPdr from "./pages/AddPdr";
import IndexPage from "./pages/IndexPage";
<<<<<<< HEAD
import Contact from "./pages/Contact";
=======
>>>>>>> 989921f81065621886d6b32b7513b78de3c2f68a

const AppRoutes = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={IndexPage} />
        <Route exact path="/add-pdr" component={AddPdr} />
<<<<<<< HEAD
        <Route exact path="/contact" component={Contact} />
=======
>>>>>>> 989921f81065621886d6b32b7513b78de3c2f68a
      </Switch>
    </Router>
  );
};

export default AppRoutes;
