import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Alert, Button, Spinner } from "react-bootstrap";
import { Component } from "react";
import MyNav from "./components/MyNav/MyNav";

class App extends Component {
  state = {
    blogs: null,
    searchResults: [],
    countrywiseArticles: [],
    loading: true,
    error: false,
    country: "in",
  };
  componentDidMount = () => {};
  /*  componentDidUpdate = (prevProps) => {

  }; */

  render() {
    return (
      <>
        <MyNav />
      </>
    );
  }
}

export default App;
