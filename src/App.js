import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Component } from "react";
import MyNav from "./components/MyNav/MyNav";
import Inspiration from "./components/Inspiration/Inspiration";
import Discover from "./components/Discover/Discover";
import Home from "./components/Home/Home";
import Demo from "./components/Home/Demo";
import FooterPart from "./components/FooterPart/FooterPart";
import Nav1 from "./components/MyNav/Nav";

class App extends Component {
  render() {
    return (
      <>
        {/*    <MyNav /> */}
        <Nav1 />
        {/*  <Demo /> */}
        <Home />
        <Inspiration />
        <Discover />
        <FooterPart />
      </>
    );
  }
}

export default App;
