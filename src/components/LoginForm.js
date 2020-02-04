import React, {Component} from "react";

export default class LoginForm extends Component {
  
  state = {
    username: '',
    password: ''
  }

  handleOnChange = event => {
    this.setState({[event.target.name]: event.target.value.trim()})
  }

  handleLogin = event => {
    event.preventDefault()
    return (!this.state.username || !this.state.password) ? null : this.props.handleLogin(this.state)
  }

  render() {
    return (
      <form onSubmit={event => this.handleLogin(event)}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={this.handleOnChange} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={this.handleOnChange} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

// Saving input values in state
//       1) should save the username in state when the input changes
//       2) should save the password in state when the input changes

//     Calling `handleLogin` callback prop
//       3) should call the prevent the default action when the form is being submitted
//       ✓ should not call the `handleLogin` callback prop when the username and/or password fields are empty
//       4) should call the `handleLogin` callback prop when the form is being submitted
