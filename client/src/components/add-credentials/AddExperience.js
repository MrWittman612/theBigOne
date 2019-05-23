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

	onCkeck(e) {
		this.setState({
			disabled: !this.state.disabled,
			current: !this.state.current
		});
	}

	render() {
		const { errors } = this.state;
		return (
			<section style="height: 100%;padding: 47px;">
				<div class="container border rounded shadow-lg profile profile-view" id="profile" style="background-color: #668291;color: rgb(236,241,245);font-family: Roboto, sans-serif;">
					<div class="row">
						<div class="col-md-12 alert-col relative">
							<div class="alert alert-info absolue center" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button><span>Profile save with success</span></div>
						</div>
					</div>
					<form>
						<div class="form-row profile-row">
							<div class="col-md-4 relative">
								<div class="d-flex d-md-flex d-lg-flex d-xl-flex justify-content-center justify-content-md-center justify-content-lg-center avatar"><i class="fa fa-handshake-o d-xl-flex justify-content-xl-center" style="font-size: 115px;margin: 0px auto;"></i></div>
							</div>
							<div class="col-md-8">
								<h1 style="margin-bottom: 0px;">Add Experience</h1>
								<h5 style="padding-left: 4px;"><br>* = required fields<br><br></h5>
									<hr>
										<div class="form-row">
											<div class="col-sm-12 col-md-6">
												<div class="form-group"><label>Company</label><input class="form-control" type="text" name="firstname"></div>
												</div>
												<div class="col-sm-12 col-md-6">
													<div class="form-group"><label>Job Title</label><input class="form-control" type="text" name="lastname"></div>
													</div>
												</div>
												<div class="form-group"><label>Location</label><input class="form-control" type="text"></div>
													<div class="form-row">
														<div class="col-sm-12 col-md-6">
															<div class="form-group"><label>From Date</label><input class="form-control" type="password" name="password" autocomplete="off" required=""></div>
															</div>
															<div class="col-sm-12 col-md-6">
																<div class="form-group"><label>To Date</label><input class="form-control" type="password" name="confirmpass" autocomplete="off" required=""></div>
																</div>
															</div>
															<div class="form-group">
																<div class="form-check float-right d-xl-flex justify-content-xl-start" style="padding-top: 10px;padding-bottom: 10px;"><input class="form-check-input" type="checkbox" id="formCheck-1"><label class="form-check-label d-xl-flex justify-content-xl-end" for="formCheck-1">Current Job</label></div>
																</div>
																<div class="form-group"><label>Job Description</label><textarea class="form-control"></textarea></div>
																<hr>
																	<div class="form-row">
																		<div class="col-md-12 content-right"><button class="btn btn-primary d-flex justify-content-center form-btn" type="submit" style="background-color: rgb(26,35,85);">CANCEL </button></div>
																	</div>
                    </div>
															</div>
            </form>
													</div>
    </section>





{/* 
			 <div className="add-experience">
		 	<div className="row">
		 		<div className="col-md-8 m-auto">
					<Link to="/dashboard" className="btn btn-light">
						Go Back
				</Link>
						<h1>Add Experience</h1>
					<p>
						Add any job or postition that you have had in the past or current
						</p>
					<small className="d-block pd-3">* = required fields</small>
						<form onSubmit={this.onSubmit}>
							<TextFieldGroup
								placeholder="* Company"
								name="company"
								value={this.state.company}
								onChange={this.onChange}
								error={errors.company}
							/>
							<TextFieldGroup
								placeholder="* Job Title"
								name="title"
								value={this.state.title}
								onChange={this.onChange}
								error={errors.title}
							/>
							<TextFieldGroup
								placeholder="Location"
								name="location"
								value={this.state.location}
								onChange={this.onChange}
								error={errors.location}
							/>
							<h6>From Date</h6>
							<TextFieldGroup
								name="from"
								type="date"
								value={this.state.from}
								onChange={this.onChange}
								error={errors.from}
							/>
							<h6>To Date!</h6>
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
									className="form-check-input"
									name="current"
									type="checkbox"
									value={this.state.currnet}
									checked={this.state.current}
									onChange={this.onChange}
									id="current"
								/>
								<label htmlFor="current" className="form-check-label">
									Current Job
								</label>
							</div>
							<TextAreaFieldGroup
								placeholder="Job Description"
								name="description"
								value={this.state.description}
								onChange={this.onChange}
								error={errors.description}
								info="Tell us about the position"
							/>
							<input
								type="submit"
								value="Submit"
								className="btn btn-info btn-block mt-4"
							/>
						</form>
					</div>
				</div>
			</div> */}
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
