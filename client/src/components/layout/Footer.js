import React from 'react';

import './footer.css';

export default () => {
	return (
		<footer className="bg-dark text-white p-4 text-center">
			Copyright &copy; {new Date().getFullYear()} MPLS DevConnect
		</footer>
	);
};
