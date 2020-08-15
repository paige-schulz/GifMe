import React from "react";
import ReactDOM from "react-dom";
import "./SearchBarCompo.css";
import ButtonCompo from "./ButtonCompo";
import Checkbox from "./CheckBox";

export default class SearchBarCompo extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      value: [],
      count: 0,
    };
  }

  handleChange(event) {
    var text = event.target.value;
    fetch("http://localhost:8080/", {
      method: "GET",
    })
      .then((res1) => {
        return res1.text();
      })
      .then((res1) => {
        console.log(res1);
      })
      .catch((err) => {
        console.log(err);
      });

    fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=AVN1T0AoSvlBUhLU8SeGDVy0Lh48zdqG&q=${text}&limit=10&lang=en`,
      {
        method: "GET",
      }
    )
      .then((res1) => {
        return res1.json();
      })
      .then((res1) => {
        console.log(res1.data);
        console.log(text);
        this.setState({ value: res1.data });
        console.log(this.state);
        console.log(this.state.value);
      })
      .catch((err) => {
        console.log(err);
      });
      //figma stuff
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    fetch(proxyurl +'https://www.figma.com/file/PoRsFjY08S89ajWjVxDkRW/Untitled?node-id=5%3A2',
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
    )
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  render() {
    var searchGifList = this.state.value.map((x) => {
      return (
        <li>
          <img src={x.images.downsized.url}></img>
          <ButtonCompo></ButtonCompo>
          <Checkbox className="check"></Checkbox>
        </li>
      ); 
    });
    console.log(searchGifList);
    return (
      <div>
        <div className="searchBar1">
          <form>
            <label htmlFor="search">Search: </label>
            <input className="search3" id="search" type="text" onChange={this.handleChange}></input>
          </form>
        </div>
        <div className="searchGif">{searchGifList}</div>
      </div>
    );
  }
}
