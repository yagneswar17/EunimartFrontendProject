import React, { Component } from 'react';
import './usercard.css';

const USER_API = 'https://reqres.in/img/faces/';

class Usercard extends Component {
    render() {
        let imgSrc = `${USER_API}${(this.props.id)}-image.jpg`;
        let str = "";
        if (this.props.flag === 1) {
            str = "Usercard-Info1";
        }
        else {
            str = "Usercard-Info2";
        }
        return (
            <div className={str}>
                <h1 className="Usercard-title">{this.props.first_name}</h1>
                <div className="Usercard-avatar">
                    <img src={imgSrc} alt={this.props.name} />
                </div>
            </div>
        );
    }
}

export default Usercard;