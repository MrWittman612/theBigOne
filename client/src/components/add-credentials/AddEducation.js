import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addEducation } from '../../actions/profileActions';

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
			disabled: false
		};
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
		this.onCkeck = this.onCkeck.bind(this);
	}
	componentWillReceiveProps(nextProps) {
		if (nextProps.errors) {
			this.setState({ errors: nextProps.errors });
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
			description: this.state.description
		};
		this.props.addEducation(expData, this.props.history);
	}

	onChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	onCkeck(e) {
		this.setState({
			disabled: !this.state.disabled,
			current: !this.state.current
		});
	}

	render() {
		const { errors } = this.state;
		return (
			<section>
				<div
					className="container border rounded shadow-lg profile profile-view"
					id="profile"
					// style="background-color: #668291;color: rgb(236,241,245);font-family: Roboto, sans-serif;"
				>
					<form onSubmit={this.onSubmit}>
						<div className="form-row profile-row">
							<div className="col-md-4 relative">
								<div className="d-flex d-md-flex d-lg-flex d-xl-flex justify-content-center justify-content-md-center justify-content-lg-center avatar">
									<i
										className="fa fa-balance-scale d-xl-flex justify-content-xl-center"
										// style="font-size: 115px;margin: 0px auto;"
									/>
								</div>
							</div>
							<div className="col-md-8">
								<h1>Add Education</h1>
								<h5>
									<br />* = required fields
									<br />
									<br />
								</h5>
								<hr />
								<div className="form-row">
									<div className="col-sm-12 col-md-6">
										<div className="form-group">
											<label>School</label>

											<TextFieldGroup
												placeholder="* School"
												name="school"
												value={this.state.school}
												onChange={this.onChange}
												error={errors.school}
											/>
										</div>
									</div>
									<div className="col-sm-12 col-md-6">
										<div className="form-group">
											<label>Degree</label>
											<TextFieldGroup
												placeholder="* Degree"
												name="degree"
												value={this.state.degree}
												onChange={this.onChange}
												error={errors.degree}
											/>
										</div>
									</div>
								</div>
								<div className="form-group">
									<label>Field of Study</label>
									<TextFieldGroup
										placeholder="* Field of Study"
										name="fieldofstudy"
										value={this.state.fieldofstudy}
										onChange={this.onChange}
										error={errors.fieldofstudy}
									/>
								</div>
								<div className="form-row">
									<div className="col-sm-12 col-md-6">
										<div className="form-group">
											<label>From Date</label>
											<TextFieldGroup
												name="from"
												type="date"
												value={this.state.from}
												onChange={this.onChange}
												error={errors.from}
											/>
										</div>
									</div>
									<div className="col-sm-12 col-md-6">
										<div className="form-group">
											<label>To Date</label>
											<TextFieldGroup
												name="to"
												type="date"
												value={this.state.to}
												onChange={this.onChange}
												error={errors.to}
												disabled={this.state.disabled ? 'disabled' : ''}
											/>
										</div>
									</div>
								</div>
								<div className="form-group">
									<div
										className="form-check float-right d-xl-flex justify-content-xl-start"
										// style="padding-top: 10px;padding-bottom: 10px;"
									>
										<input
											type="checkbox"
											className="form-check-input"
											name="current"
											value={this.state.current}
											checked={this.state.current}
											onChange={this.onChange}
											id="current"
										/>

										<label
											className="form-check-label d-xl-flex justify-content-xl-end"
											for="formCheck-1 current"
										>
											Currently Student
										</label>
									</div>
								</div>
								<div className="form-group">
									<label>Job Description</label>
									<TextAreaFieldGroup
										placeholder="Program Description"
										name="description"
										value={this.state.description}
										onChange={this.onChange}
										error={errors.description}
										info="Tell us about the program that you were in"
									/>
								</div>
								<hr />
								<div className="form-row">
									<div className="col-md-12 content-right">
										<input
											type="submit"
											value="Submit"
											className="btn btn-primary d-flex justify-content-center form-btn"
										/>
									</div>
								</div>
							</div>
						</div>
					</form>
				</div>
			</section>
		);
	}
}

AddEducation.propTypes = {
	addEducation: PropTypes.func.isRequired,
	profile: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	profile: state.profile,
	errors: state.errors
});

export default connect(
	mapStateToProps,
	{ addEducation }
)(withRouter(AddEducation));
