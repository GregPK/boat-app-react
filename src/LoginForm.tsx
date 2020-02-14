import React from 'react';

import Auth from './Auth'
import { navigate } from 'hookrouter'

class LoginForm extends React.Component<any> {
  state = { email: '', password: '' }

  handleChange = (event: any) => {
    const change = { [event.target.name]: event.target.value }
    this.setState((prevState) => Object.assign(prevState, change))
  }

  login = (event: any) => {
    event.preventDefault()
    const request = { "auth": this.state }
    fetch("http://localhost:3004/user_token", {
      method: "POST",
      body: JSON.stringify(request),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then((result: any) => {
        Auth().setToken(result.jwt)
        navigate('/boats')
      })
  }

  render() {
    return (
      <form onSubmit={this.login}>
        <div className="field">
          <p className="control has-icons-left has-icons-right">
            <input className="input" name="email" type="email" placeholder="Email" onChange={this.handleChange} value={this.state.email} />
            <span className="icon is-small is-left">
              <i className="fas fa-envelope"></i>
            </span>
            <span className="icon is-small is-right">
              <i className="fas fa-check"></i>
            </span>
          </p>
        </div>
        <div className="field">
          <p className="control has-icons-left">
            <input className="input" type="password" name="password" placeholder="Password" onChange={this.handleChange} value={this.state.password} />
            <span className="icon is-small is-left">
              <i className="fas fa-lock"></i>
            </span>
          </p>
        </div>
        <div className="field">
          <p className="control">
            <button className="button is-success">
              Login
            </button>
          </p>
        </div>
      </form>
    )
  }
}

export default LoginForm
