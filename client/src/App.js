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
import { makeStyles } from "@material-ui/core";
import SavedLikesCompo from "./Components/SavedLikesCompo";
import DisplayLikesCompo from './Components/DisplayLikesCompo';
const useStyles = makeStyles({
  root: {
    background: "background: linear-gradient(45deg, #a7c0ca 30%, #d6d6db 90%);",
  },
});

function App() {
  const classes = useStyles();
  return (
    <Router>
      <div className={classes.root}>
        <NavBar></NavBar>
        <Route path="/" exact component={PhotoCompo} />
        <Route path="/trending" exact component={TrendingCompo}></Route>
        <Route path="/Saved" exact component={SavedCompo}></Route>
        <Route path="/likes" exact component={DisplayLikesCompo}></Route>
        <Route path="/Random" exact component={RandomGifButtonCompo}></Route>
      </div>
    </Router>
  );
}
export default App;
