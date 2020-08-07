import React from "react";
import ReactDOM from "react-dom";
import ButtonCompo from "./ButtonCompo";
import "./RandomGifButtonCompo.css";
import CheckBox from "./CheckBox";

export default class RandomGifButtonCompo extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      value: [],
    };
  }
  handleChange() {
    fetch(
      "https://api.giphy.com/v1/gifs/random?api_key=AVN1T0AoSvlBUhLU8SeGDVy0Lh48zdqG&limit=10",
      {
        method: "GET",
      }
    )
      .then((res1) => {
        return res1.json(); 
      })
      .then((res1) => {
        console.log(res1.data);
        this.setState({ value: res1.data.images.downsized.url });
        console.log(this.state.value);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <div className="randomImageButton">
        
        <button className="randomButton" onClick={this.handleChange}>
          {" "}
          Generate a Random Gif!
        </button>
        <img className="image" src={this.state.value}></img>
        <CheckBox></CheckBox>
        <ButtonCompo></ButtonCompo>
        
      </div>
    );
  }
}
