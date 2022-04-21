import React, { Component } from 'react';
import './user.css';
import Usercard from './usercard';
class User extends Component {
    render() {
        var flag = 0;
        if (this.props.isColor) {
            flag = 1;
        }
        else {
            flag = 0;
        }
        return (
            <div className="user">
                <div className="user-cards">
                    {this.props.person.map((p) => (
                        <Usercard id={p.id} email={p.email} first_name={p.first_name} last_name={p.last_name} flag={flag} />
                    ))}
                </div>
            </div>
        );
    }
}

export default User;