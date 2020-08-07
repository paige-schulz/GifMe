import React from 'react';
import { render } from 'react-dom';
import "./CheckBox.css";

export default class Checkbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = { checked: false }
        this.handleCheck = this.handleCheck.bind(this);
    }

    handleCheck(e) {
        this.setState({
            checked: e.target.checked
        })
        
    }
    
    render() {
        return (
            <div className="check" >
                <input
                    id="checkbox_id"
                    type="checkbox"
                    checked={this.state.checked}
                    onChange={this.handleCheck}
                    
                />
                <label htmlFor="checkbox_id"></label>
            </div>
        );
    }
}

render(<Checkbox />, document.getElementById('root'));