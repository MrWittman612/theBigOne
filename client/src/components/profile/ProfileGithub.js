import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ProfileGithub extends Component {
	constructor(props) {
		super(props);
		this.state = {
			clientId: process.env.githubClientId,
			clientSecret: process.env.githubClientSecret,
			count: 5,
			sort: 'created: asc',
			repos: []
		};
	}

	componentDidMount() {
		const { username } = this.props;
		const { count, sort, clientId, clientSecret } = this.state;

		fetch(
			`https://api.github.com/users/${username}/repos?per_page=${count}&sort=${sort}&client_id=${clientId}&clients_secret=${clientSecret}`
		)
			.then(res => res.json())
			.then(console.log(this.state))

			.then(data => {
				if (this.refs.myRef) {
					this.setState({
						repos: data
					});
				}
			})
			.catch(err => console.log(err));
	}

	render() {
		const { repos } = this.state;
		const repoItems = repos.map(repo => (
			<div key={repo.id} className="card card-body mb-2">
				<div className="row">
					<div className="col-md-6">
						<h4>
							{/* <Link
								to={repo.html_url}
								target="_blank"
								onClick={event => {
									event.preventDefault();
									window.open(this.makeHref(`${repo.html_url}`));
								}}
							/> */}

							<Link
								to={repo.html_url}
								// className="text-info text-decoration-none"
								target="_blank"
								rel="noopener noreferrer"
							>
								<a
									className="text-info text-decoration-none"
									href={repo.html_url}
									target="_blank"
									rel="noopener noreferrer"
								>
									{repo.name}
								</a>
							</Link>
						</h4>
						<p>{repo.description}</p>
					</div>
					<div className="col-md-6 float-right">
						<span className="badge badge-info mr-1 float-right">
							Stars: {repo.stargazers_count}
						</span>
						<span className="badge badge-secondary mr-1 float-right">
							Watchers: {repo.watchers_count}
						</span>
						<span className="badge badge-success mr-1 float-right">
							Forks: {repo.forks_count}
						</span>
					</div>
				</div>
			</div>
		));
		return (
			<div ref="myRef">
				<hr />
				<h3 className="mb-4">Latest Github Repos</h3>
				{repoItems}
			</div>
		);
	}
}

ProfileGithub.propTypes = {
	username: PropTypes.string.isRequired
};

export default ProfileGithub;
