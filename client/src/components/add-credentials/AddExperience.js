import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addExperience } from '../../actions/profileActions';

class AddExperience extends Component {
	constructor(props) {
		super();
		this.state = {
			company: '',
			title: '',
			location: '',
			from: '',
			to: '',
			current: false,
			description: '',
			errors: {},
			disabled: false
		};
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
		this.onCheck = this.onCheck.bind(this);
	}
	componentWillReceiveProps(nextProps) {
		if (nextProps.errors) {
			this.setState({ errors: nextProps.errors });
		}
	}
	onSubmit(e) {
		e.preventDefault();

		const expData = {
			company: this.state.company,
			title: this.state.title,
			location: this.state.location,
			from: this.state.from,
			to: this.state.to,
			current: this.state.current,
			description: this.state.description
		};
		this.props.addExperience(expData, this.props.history);
	}

	onChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	onCheck(e) {
		this.setState({
			disabled: !this.state.disabled,
			current: !this.state.current
		});
	}

	render() {
		const { errors } = this.state;
		return (
			<div>
				<section>
					{/* style="height: 100%;padding: 47px;" */}
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
											className="fa fa-handshake-o d-xl-flex justify-content-xl-center"
											// style="font-size: 115px;margin: 0px auto;"
										/>
									</div>
								</div>
								<div className="col-md-8">
									<h1>Add Experience</h1>
									<h5>
										<br />* = required fields
										<br />
										<br />
									</h5>
									<hr />
									<div className="form-row">
										<div className="col-sm-12 col-md-6">
											<div className="form-group">
												<label>Company</label>

												<TextFieldGroup
													placeholder="* Company"
													name="company"
													value={this.state.company}
													onChange={this.onChange}
													error={errors.company}
												/>
											</div>
										</div>
										<div className="col-sm-12 col-md-6">
											<div className="form-group">
												<label>Job Title</label>

												<TextFieldGroup
													placeholder="* Job Title"
													name="title"
													value={this.state.title}
													onChange={this.onChange}
													error={errors.title}
												/>
											</div>
										</div>
									</div>
									<div className="form-group">
										<TextFieldGroup
											placeholder="Location"
											name="location"
											value={this.state.location}
											onChange={this.onChange}
											error={errors.location}
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
												className="form-check-input"
												name="current"
												type="checkbox"
												value={this.state.current}
												checked={this.state.current}
												onChange={this.onChange}
												id="current"
											/>
											<label
												htmlFor="current"
												className="form-check-label d-xl-flex justify-content-xl-end"
											/>
											Current Job
										</div>
									</div>
									<div className="form-group">
										<label /> Job Description
										<TextAreaFieldGroup
											placeholder="Job Description"
											name="description"
											value={this.state.description}
											onChange={this.onChange}
											error={errors.description}
											info="Tell us about the position"
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
			</div>
		);
	}
}

AddExperience.propTypes = {
	addExperience: PropTypes.func.isRequired,
	profile: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	profile: state.profile,
	errors: state.errors
});

export default connect(
	mapStateToProps,
	{ addExperience }
)(withRouter(AddExperience));
