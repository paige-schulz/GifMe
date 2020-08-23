import React from "react";
import "./SavedCompo"
import "./SavedImgsCompo.css"

export default class SavedImgsCompo extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="all">
                <img src={this.props.storedGif.gifurl}></img>
                <h2 className="caption">{this.props.storedGif.caption}</h2>
                <h3 className="tags">{this.props.storedGif.tags}</h3>
            </div>
        )
    }

}