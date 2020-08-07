import React from "react";
import "./SavedCompo"

export default class SavedImgsCompo extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>{this.props.id}</div>
        )
    }

}