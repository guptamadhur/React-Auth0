import React, { Component } from 'react';
import Profile from './Profile';
import "./index.scss";
import axios from "axios";

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            profiles: []
        }
    }

    handleSubmit = async () => {
        if (this.state.userName.length > 2) {
            const res = await axios.get(`https://api.github.com/users/${this.state.userName}`);
            this.setState(prevState => ({
                profiles: [...prevState.profiles, res.data],
            }));
        }
    };

    render() {
        return (
            <>
                <div className="github-container">
                    <input
                        type="text"
                        value={this.state.userName}
                        onChange={event => this.setState({ userName: event.target.value })}
                        onBlur={this.handleSubmit}
                        placeholder="GitHub Username"
                        required
                    />
                    <button onClick={this.handleSubmit}>Add card</button>
                </div>
                {this.state.profiles && this.state.profiles.map(profile => <Profile key={profile.id} {...profile} />)}
            </>
        )
    }
}