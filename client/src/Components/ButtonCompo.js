import React from "react";
import ReactDOM from "react-dom";
import CheckBox from "./CheckBox";
//import styled, { ThemeProvider } from "styled-components";
import "./ButtonCompo.css";

export default class ButtonCompo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  incrementMe = () => {
    let newCount = this.state.count + 1;
    this.setState({
      count: newCount,
    });
  };
  render() {
    return (
      <div>
        <button className= "button" onClick={this.incrementMe}>💖 Likes:{this.state.count}</button>{" "}
        <form >
          <label className="caption" htmlFor="search">Add Caption: </label>
          <input className="form"
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          ></input>
        </form>
        <br></br>
        <form >
          <label className="tags" htmlFor="search">Add Tags: </label>
          <input className="form"
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          ></input>
        </form>
      </div>
    );
  }
}
