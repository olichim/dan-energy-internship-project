import React from "react";
import { BrowserRouter as Router, Switch, Route, useLocation } from "react-router-dom";
import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";
import Home from "../home/Home";
import About from "../about/About";
import Blog from "../blog/Blog";
import Services from "../services/Services";
import Contact from "../contact/Contact";
import Signup from "./Signup";

const Pages = () => {
  return (
    <Router>
      <Header />
      <Content />
    </Router>
  );
};

const Content = () => {
  const location = useLocation();

  // Check if the current path is '/signup', if yes, don't render the footer
  const hideFooter = location.pathname === '/signup';

  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/signup" component={Signup} />
      </Switch>
      {!hideFooter && <Footer />}
    </>
  );
};

export default Pages;
