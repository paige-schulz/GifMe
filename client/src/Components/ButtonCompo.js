import React from "react";
import ReactDOM from "react-dom";
import "./ButtonCompo.css";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core";



export default class ButtonCompo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,

    };
    this.tagRef = React.createRef();
    this.captionRef = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.successMessageRef = React.createRef();
  }
  incrementMe = () => {
    let newCount = this.state.count + 1;
    this.setState({
      count: newCount,
    });
    console.log(this.props.gifUrl);
    fetch('http://localhost:8080/like', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        gifUrl: this.props.gifUrl
      })
    }).then(res => res.json()).then(res => {console.log(res)}).catch(err => console.log("here is error " + err));
  };
  handleSubmit(event) {
    event.preventDefault();
    console.log("yeah im reached button compo");
     fetch("http://localhost:8080/save", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        gifUrl: this.props.gifUrl,
        tags: this.tagRef.current.value,
        caption: this.captionRef.current.value,
      })
    }).then(res => res.json()).then(res => {
      console.log(res);
      this.successMessageRef.current.innerHTML = "Saved!";
    }).catch(err => {
      console.log(err);
      this.successMessageRef.current.innerHTML = "Sorry, there was an error trying to save!";
    }); 
  }
  
  
  render() {
    
    return (
      <div>
        <button
          className="likeButton"
          onClick={this.incrementMe}>
          💖 Likes:{this.state.count}
        </button>{" "}
        
        
        <form onSubmit={this.handleSubmit}>
          <label className="caption" htmlFor="search">
            Add Caption:{" "}
          </label>
          <input
            ref={this.captionRef}
            className="form"
            type="text"
            value={this.state.value}
          ></input>
          <br></br>
          <label className="tags" htmlFor="search">
            Add Tags:{" "}
          </label>
          <input
            ref={this.tagRef}
            className="form"
            placeholder="#"
            type="text"
            value={this.state.value}
          ></input>
          <br></br>
          <br></br>
          <input className="saveButton" type="submit" value="Save"></input>
        </form>
        <h3 ref={this.successMessageRef}></h3>
        </div>
      
    );
  }
}
