import React, {Component} from 'react';
import {Link,withRouter} from 'react-router-dom';
import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {addEducation} from '../../actions/profileActions';

class AddEducation extends Component {
  constructor(props) {
    super();
    this.state = {
      school: '',
      degree: '',
      fieldofstudy: '',
      from: '',
      to: '',
      current: false,
      description: '',
      errors: {},
      disabled: false,
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onCkeck = this.onCkeck.bind(this);
  };
  componentWillReceiveProps(nextProps){
    if (nextProps.errors) {
      this.setState({errors: nextProps.errors});
    }
  }
  onSubmit(e) {
    e.preventDefault();

    const expData = {
      school: this.state.school,
      degree: this.state.degree,
      fieldofstudy: this.state.fieldofstudy,
      from: this.state.from,
      to: this.state.to,
      current: this.state.current,
      description: this.state.description,
    };
    this.props.AddEducation(expData, this.props.history);
  }

  onChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

 onCkeck(e) {
   this.setState({
     disabled: !this.state.disabled,
     current: !this.state.current
   })
 }

  render () {
    const {errors} = this.state;
    return (
      <div className="add-experience">
        <div className="row">
          <div className="col-md-8 m-auto">
            <Link to="/dashboard" className="btn btn-light">Go Back</Link>
            <h1>Add Education</h1>
            <p>Add any job or postition that you have had in the past or current</p>
            <small className="d-block pd-3">* = required fields</small>
            <form onSubmit={this.onSubmit}>
              <TextFieldGroup
                placeholder="* School"
                name="school"
                value={this.state.school}
                onChange={this.onChange}
                error={errors.school}
               />
               <TextFieldGroup
                 placeholder="* Degree"
                 name="degree"
                 value={this.state.degree}
                 onChange={this.onChange}
                 error={errors.degree}
                />
                <TextFieldGroup
                  placeholder="* Field of Study"
                  name="fieldofstudy"
                  value={this.state.fieldofstudy}
                  onChange={this.onChange}
                  error={errors.fieldofstudy}
                 />
                 <h6>From Date</h6>
                 <TextFieldGroup
                     name="from"
                     type="date"
                     value={this.state.from}
                     onChange={this.onChange}
                     error={errors.from}
                  />
                  <h6>To Date</h6>
                  <TextFieldGroup
                      name="to"
                      type="date"
                      value={this.state.to}
                      onChange={this.onChange}
                      error={errors.to}
                      disabled={this.state.disabled ? 'disabled' : ''}
                   />
                   <div className="form-check mb-4">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      name="current"
                      value={this.state.currnet}
                      checked={this.state.current}
                      onChange={this.onChange}
                      id="current"
                     />
                     <label
                       htmlFor="current"
                       className="form-check-label"
                     >Current Job</label>
                  </div>
                  <TextAreaFieldGroup
                     placeholder="Program Description"
                     name="description"
                     value={this.state.description}
                     onChange={this.onChange}
                     error={errors.description}
                     info="Tell us about the program that you were in"
                  />
                  <input
                     type="submit"
                     value="Submit"
                     className="btn btn-info btn-block mt-4"
                   />
            </form>
          </div>
        </div>
      </div>
    )
  }
}


AddEducation.propTypes = {
  addEducation: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
})

export default connect(mapStateToProps, {addEducation})(withRouter(AddEducation));
