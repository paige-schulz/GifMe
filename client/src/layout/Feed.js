import React from 'react';
import { NavLink } from 'react-router-dom'

export default class Feed extends React.Component {
    render() {
        return (

            <ul className="right">
                <li><NavLink to='/'>Feed</NavLink></li>
                <li><NavLink to='/'>Home</NavLink></li>
            </ul>

        );
    }
}