import React from "react";
import "./App.css";
import NavBar from "./layout/NavBar";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PhotoCompo from "./Components/PhotoCompo";
import AbstractedImgCompo from "./Components/AbstractedImgCompo";
import "./Components/SearchBarCompo";
import SearchBarCompo from "./Components/SearchBarCompo";
import TrendingCompo from "./Components/TrendingCompo";
import RandomGifButtonCompo from "./Components/RandomGifButtonCompo";
import SavedCompo from "./Components/SavedCompo";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar></NavBar>
        <Route path="/" exact component={PhotoCompo} />
        <Route path="/trending" exact component={TrendingCompo}></Route>
        <Route path="/Saved" exact component={SavedCompo}></Route>
        
        <Route path="/Random" exact component={RandomGifButtonCompo}></Route>
      </div>
    </Router>
  );
}
export default App;
