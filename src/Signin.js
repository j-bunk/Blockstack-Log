import React, { Component } from 'react';
import './signin.css'
export default class Signin extends Component {

  render() {
    const { handleSignIn } = this.props;

    return (
      <div className="panel-landing" id="section-1">
        
        <h1 className="landing-heading">Welcome To Bottom Line!</h1>
        <p className="lead">
          <button
            className="btn btn-primary btn-lg"
            id="signin-button"
            onClick={ handleSignIn.bind(this) }
          >
            Sign In To See Your Data Collection Log
          </button>
        </p>
      </div>
    );
  }
}
