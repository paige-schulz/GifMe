import React from "react";
import ReactDOM from "react-dom";
import ButtonCompo from "./ButtonCompo";
import "./TrendingCompo.css";

export default class TrendingCompo extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      value: [],
    };
  }
  componentDidMount() {
    fetch(
      `https://api.giphy.com/v1/gifs/trending?api_key=AVN1T0AoSvlBUhLU8SeGDVy0Lh48zdqG&limit=30&lang=en`,
      {
        method: "GET",
      }
    )
      .then((res1) => {
        return res1.json();
      })
      .then((res1) => {
        console.log(res1.data);
        this.setState({ value: res1.data });
        console.log(this.state);
        console.log(this.state.value);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    var trendingList = this.state.value.map((x) => {
      return <div className="trending"><img src={x.images.downsized.url}></img> 
      <ButtonCompo gifUrl={x.images.downsized.url}></ButtonCompo> 
      </div>
      
    });
    return <div>{trendingList}</div>;
  }
}
