import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Inspiration from "./components/Inspiration/Inspiration";
import Discover from "./components/Discover/Discover";
import Home from "./components/Home/Home";
import FooterPart from "./components/FooterPart/FooterPart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar1 from "./components/MyNav/Navbar";
import Nav1 from "./components/MyNav/Search";
import Button from "./components/MyNav/Button";
import Search from "./components/MyNav/Search";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar1 />} />
        </Routes>
      </BrowserRouter>

      <Home />
      <Inspiration />
      <Discover />
      <FooterPart />
    </>
  );
}

export default App;
