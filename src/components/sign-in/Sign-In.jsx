import React from 'react';

import FormInput from '../form-input/Form-Input'
import CustomButton from '../custom-button/Custom-Button'

import { auth, signInWithGoogle } from '../../firebase/firebase.utils'

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

  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });

    } catch (error) {
      console.error(error.message)
    }
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

          <div className="button">
            <CustomButton type="submit"> Sign in </CustomButton>
            <CustomButton isGoogleSignIn onClick={ signInWithGoogle }> Sign in with Google </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
