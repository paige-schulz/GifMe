import React from "react";
import "./SavedImgsCompo";
import SavedImgsCompo from "./SavedImgsCompo";

export default class SavedCompo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiResponse: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:8080/getSaved")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
        this.setState({ apiResponse: res });
      });
  }
  render() {
    var imageId = this.state.apiResponse.map((x) => {
      return <SavedImgsCompo storedGif={x}></SavedImgsCompo>;
    });
    var reversedImageId2 = imageId.reverse();
    return <div>{reversedImageId2}</div>;
  
  }
}
