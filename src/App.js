import React, { Suspense } from "react";
import Navbar from "./component/Navbar";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
const App = () => {
  const location = useLocation();
  const Home = React.lazy(() => import("./component/Home"));
  const About = React.lazy(() => import("./component/About"));
  const Services = React.lazy(() => import("./component/Services"));
  const Music = React.lazy(() => import("./component/Music"));
  const Videos = React.lazy(() => import("./component/Videos"));
  const Footer = React.lazy(() => import("./component/Footer"));
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div style={{ textAlign: "center" }}>

      <Navbar />
      
      <Switch>
        <Route path="/videos">
          <Videos />
        </Route>
        <Route path="/musicplayer">
          <Music />
        </Route>
        <Route path="/services">
          <Services />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>

      {location.pathname !== "/home" && location.pathname !== "/" && <Footer />}
    </div>
  );
};

export default App;
