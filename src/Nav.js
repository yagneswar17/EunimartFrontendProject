import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Nav extends Component {
    render() {
        return (
            <nav>
                <Link to="/users">
                    <li> User Details</li>
                </Link>
            </nav>
        );
    }
}

export default Nav;
