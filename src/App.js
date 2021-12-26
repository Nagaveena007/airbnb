import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Alert, Button, Spinner } from "react-bootstrap";
import { Component } from "react";
import MyNav from "./components/MyNav/MyNav";
import Inspiration from "./components/Inspiration/Inspiration";
import Discover from "./components/Discover/Discover";

class App extends Component {
  state = {
    blogs: null,
    searchResults: [],
    countrywiseArticles: [],
    loading: true,
    error: false,
    country: "in",
  };

  render() {
    return (
      <>
        <MyNav />
        <Inspiration />
        <Discover />
      </>
    );
  }
}

export default App;
