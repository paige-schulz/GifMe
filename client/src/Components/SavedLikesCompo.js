import React from "react";
import './SavedLikesCompo.css'

export default class SavedLikesCompo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="gif">
        <img src={this.props.storedGif.gifurl}></img>
      </div>
    );
  }
}
