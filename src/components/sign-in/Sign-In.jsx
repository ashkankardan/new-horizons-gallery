import React from 'react';

import FormInput from '../form-input/Form-Input'
import CustomButton from '../custom-button/Custom-Button'

import "./sign-in.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }

  handleChange = (e) => {
    const { name, value } = e.target;


    this.setState({
      [name]: value
    })

  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({ email: '', password: '' });
  }

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            handleChange={this.handleChange}
            name="email"
            type="email"
            value={this.state.email}
            label="Email"
            required
          />
          <FormInput
            handleChange={this.handleChange}
            name="password"
            type="password"
            value={this.state.password}
            label="Password"
            required
          />

          <CustomButton type="submit">
            Sign in
          </CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
