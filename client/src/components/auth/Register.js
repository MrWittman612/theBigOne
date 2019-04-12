import React, { Component } from 'react'
// import PropTypes from 'prop-types'

class Register extends Component {
  constructor {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      password2: '',
      errors: {}
    }
  }
  onChange(e) {
    this.setState({[e.target.name]});
  }

  render () {
    return (
    <div className="register">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Sign Up</h1>
            <p className="lead text-center">Create your DevConnector account</p>
            <form action="create-profile.html">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Name"
                  name="name"
                  value={this.state.name}
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control form-control-lg"
                  placeholder="Email Address"
                  value={this.state.email}
                  name="email"
                />
                <small className="form-text text-muted">This site uses Gravatar so if you want a profile image, use a Gravatar email</small>
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control form-control-lg"
                  placeholder="Password"
                  value={this.state.password}
                  name="password"
                  />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control form-control-lg"
                  placeholder="Confirm Password"
                  value={this.state.password2}
                  onChange={this.onChange}
                  name="password2"
                />
              </div>
              <input
                className="btn btn-info btn-block mt-4"
                type="submit"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
   );
  }
}

export default Register;
