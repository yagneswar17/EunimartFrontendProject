import React, { Component } from 'react';
import User from './user';
import './users.css'
class Users extends Component {
    state = {
        loading: true,
        person: null
    };

    async componentDidMount() {
        const url = "https://reqres.in/api/users";
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
        let set1 = [this.state.person.data[0], this.state.person.data[1], this.state.person.data[2]];
        let set2 = [this.state.person.data[3], this.state.person.data[4], this.state.person.data[5]];
        let exp1 = 100;
        let exp2 = 20;
        return (
            <div>
                <h1 className="heading1">User Information</h1>
                <User person={set1} exp={exp1} isColor={exp1 > exp2} />
                <User person={set2} exp={exp2} isColor={exp1 < exp2} />
            </div>
        );
    }
}
export default Users;