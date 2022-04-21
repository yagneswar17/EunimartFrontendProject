import React, { Component } from 'react';
import './userdetails.css';

const id = window.location.pathname.split('/')[2];
class Userdetails extends Component {
    state = {
        loading: true,
        person: null
    };

    async componentDidMount() {
        const url = `https://reqres.in/api/users/${id}`;
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ person: data, loading: false });
    }
    render() {
        if (this.state.loading) {
            return <div>loading...</div>;
        }

        if (!this.state.person) {
            return <div>didn't get a person</div>;
        }
        return (
            <div>
                <h1 className="display1">User Information</h1>
                <p>Email: {this.state.person.email}</p>
                <p>First Name: {this.state.person.first_name}</p>
                <p>Last Name: {this.state.person.last_name}</p>
                <p><img src={this.state.person.avatar} alt="avatar"></img></p>
            </div >
        );
    }
}
export default Userdetails;