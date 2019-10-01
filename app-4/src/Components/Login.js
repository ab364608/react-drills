import React, {Component} from 'react';

export default class Login extends Component {
    constructor() {
        super();

        this.state = {
            username: '',
            password: ''
        }
        this.handleLogin = this.handleLogin.bind(this)
    }

    usernameText(user) {
        this.setState({ username: user })
    }

    passowordText(pass) {
        this.setState({ password: pass })
    }

    handleLogin() {
        alert (`Username: ${this.state.username} Password: ${this.state.password}`);
    }

    render() {
        return(
            <div>
                <input onChange={e => this.usernameText(e.target.value)} type="text" />
                <input onChange={e => this.passowordText(e.target.value)} type="text" />
                <button onClick={this.handleLogin}> Login </button>

            </div>
        )
    }
}