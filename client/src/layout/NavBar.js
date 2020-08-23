import React from "react";
import { Link } from "react-router-dom";
import Feed from "./Feed";
import "./NavBar.css";



export default class NavBar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <nav className="navbar2">
          <div className="navbar_logo">
            <a href="/">GifMe</a>
          </div>
          <div className="space" />
          <div className="navbar_items">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/likes">Likes</a>
              </li>
              <li>
                <a href="/trending">Trending</a>
              </li>
              <li> 
                <a href="/Saved"> Saved</a>
              </li>
              <li>
                <a href="/Random"> Random Gif</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
