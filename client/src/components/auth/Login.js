import React, { Component } from 'react'
// import PropTypes from 'prop-types'

class Login extends Component {
  constructor {
    super();
    this.state = {
      email: '',
      password: '',
      errors: {}
    }
  }
  render () {
    return (
      <div className="login">
       <div className="container">
         <div className="row">
           <div className="col-md-8 m-auto">
             <h1 className="display-4 text-center">Log In</h1>
             <p className="lead text-center">Sign in to your DevConnector account</p>
             <form action="dashboard.html">
               <div className="form-group">
                 <input
                   type="email"
                   className="form-control form-control-lg"
                   placeholder="Email Address"
                   value={this.state.email}
                   onChange={this.onChange}
                   name="email"
                 />
               </div>
               <div className="form-group">
                 <input
                   type="password"
                   className="form-control form-control-lg"
                   placeholder="Password"
                   value={this.state.password}
                   onChange={this.onChange}
                   name="password"
                 />
               </div>
               <input type="submit" className="btn btn-info btn-block mt-4" />
             </form>
           </div>
         </div>
       </div>
     </div>
   );
  }
}

export default Login;
