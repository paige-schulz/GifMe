import React from "react";
import SavedLikesCompo from "./SavedLikesCompo";
export default class DisplayLikesCompo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiResponse: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:8080/getLiked")
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
      return <SavedLikesCompo storedGif={x}></SavedLikesCompo>;
    });
    var reversedImageId = imageId.reverse();
    return <div>{reversedImageId}</div>;
  }
}
