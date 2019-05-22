import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/authActions';
import TextFieldGroup from '../common/TextFieldGroup';

class Login extends Component {
	constructor() {
		super();
		this.state = {
			email: '',
			password: '',
			errors: {}
		};
		// this.onChange = this.onChange().bind(this);
	}

	componentDidMount() {
		if (this.props.auth.isAuthenticated) {
			this.props.history.push('/dashboard');
		}
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.auth.isAuthenticated) {
			this.props.history.push('/dashboard');
		}

		if (nextProps.errors) {
			this.setState({ errors: nextProps.errors });
		}
	}

	onSubmit = e => {
		e.preventDefault();

		const userData = {
			email: this.state.email,
			password: this.state.password
		};
		this.props.loginUser(userData);
	};

	onChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	render() {
		const { errors } = this.state;
		return (
			<div className="login">
				<form noValidate onSubmit={this.onSubmit}>
					<h2 className="sr-only">Login Form</h2>
					<div className="illustration">
						<i className="fa fa-paw" aria-hidden="true" />
					</div>
					<TextFieldGroup
						placeholder="Email Address"
						name="email"
						type="email"
						value={this.state.email}
						onChange={this.onChange}
						error={errors.email}
					/>
					<TextFieldGroup
						placeholder="Password"
						name="password"
						type="password"
						value={this.state.password}
						onChange={this.onChange}
						error={errors.password}
					/>
					<input type="submit" className="btn btn-info btn-block mt-4" />
				</form>
			</div>
		);
	}
}

Login.propTypes = {
	loginUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	auth: state.auth,
	errors: state.errors
});

export default connect(
	mapStateToProps,
	{ loginUser }
)(Login);
