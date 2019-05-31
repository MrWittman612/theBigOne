import React from 'react';

import './footer.css';

export default () => {
	return (
		<div className="footer-clean">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-sm-4 col-md-3 item">
						<h3>Contribute Code</h3>
						<ul>
							<li>
								<a
									href="https://github.com/1sfaccia1/theBigOne"
									target="_blank"
								>
									GitHub
								</a>
							</li>
							{/* <li>
									<a href="#">Development</a>
								</li>
								<li>
									<a href="#">Hosting</a>
								</li> */}
						</ul>
					</div>
					<div className="col-sm-4 col-md-3 item">
						<h3>About</h3>
						<ul>
							<li>
								<a href="#">Company</a>
							</li>
							<li>
								<a href="#">Team</a>
							</li>
							<li>
								<a href="#">Legacy</a>
							</li>
						</ul>
					</div>
					<div className="col-sm-4 col-md-3 item">
						<h3>Careers</h3>
						<ul>
							<li>
								<a href="#">Job openings</a>
							</li>
							<li>
								<a href="#">Employee success</a>
							</li>
							<li>
								<a href="#">Benefits</a>
							</li>
						</ul>
					</div>
					<div className="col-lg-3 item social">
						<a
							href="https://www.facebook.com/Mplsdevconnect-2316995741882135"
							target="_blank"
						>
							<i className="icon ion-social-facebook" />
						</a>
						<a href="#">
							<i className="icon ion-social-twitter" />
						</a>
						<a href="#">
							<i className="icon ion-social-snapchat" />
						</a>
						<a href="#">
							<i className="icon ion-social-instagram" />
						</a>
						<p className="copyright">
							Copyright &copy; {new Date().getFullYear()} MPLS DevConnect
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
