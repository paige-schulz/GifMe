import React from "react";
import ReactDOM from "react-dom";
import PhotoCompo from "./PhotoCompo";
import { View } from "react";
import "./AbstractedImgCompo.css";
import { Stylesheet, Text, FlatList, Dimensions } from "react";
import ButtonCompo from "./ButtonCompo";
import SavedLikesCompo from "./SavedLikesCompo";

//this component is meant for displaying extracted images and corresponding gifs
export default class AbstractedImgCompo extends React.Component {
  constructor(props) {
    super(props);
    this.updateCanvas = this.updateCanvas.bind(this);
    this.myRef = React.createRef();
    this.state = {
      gifsArray: [],
      count: 0,
    };
  }

  updateCanvas() {
    var canvas = this.myRef.current;
    var ctx = canvas.getContext("2d");
    var img = new Image();
    img.src = this.props.img;
    const that = this;
    console.log(that.props.objectRef.object);
    img.onload = () => {
      ctx.drawImage(
        img,
        that.props.objectRef.rectangle.x,
        that.props.objectRef.rectangle.y,
        that.props.objectRef.rectangle.w,
        that.props.objectRef.rectangle.h,
        0,
        0,
        that.props.objectRef.rectangle.w,
        that.props.objectRef.rectangle.h
      );
    };
  }

  componentDidMount() {
    this.updateCanvas();
    fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=AVN1T0AoSvlBUhLU8SeGDVy0Lh48zdqG&q=${this.props.objectRef.object}&limit=10&lang=en`,
      {
        method: "GET",
      }
    )
      .then((res1) => {
        return res1.json();
      })
      .then((res1) => {
        console.log(res1);
        console.log("before setting state");
       
        this.setState({
          gifsArray: res1.data,
        });
        console.log(this.state.gifsArray);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  clickSubmitButton(){
    fetch("/gifs").then(function (response) {
      
    })
  }
  //boolean checkBox
  onChange(index) {
    this.state.checkBoxsState[index] = !this.state.checkBoxsState[index];
  }
  incrementMe = () => {
    let newCount = this.state.count + 1;
    this.setState({
      count: newCount,
    });
  };
  render() {
    var gifList = this.state.gifsArray.map((x, i) => {
      return (
        <li>
          <ul className="list1">
            <img src={x.images.downsized.url}></img>
            <li>
              <ButtonCompo gifUrl={x.images.downsized.url}></ButtonCompo>
              <br /> 
            </li>
          </ul>
        </li>
      );
    });

    return (
      <div>
        <div>
          <canvas className="img" ref={this.myRef} width={this.props.objectRef.rectangle.w} 
          height={this.props.objectRef.rectangle.h} />
        </div>
        <div>{gifList}</div>
        
      </div>
    );
  }
}
