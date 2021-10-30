import React from 'react'

export const Footer = () => {
	return (

		<footer className="page-footer cyan lighten-5 ">
				<div className="footer-copyright">
					<div className="container">
						{new Date().toLocaleDateString() } <br></br>Hello from React
						<a className="grey-text text-lighten-4 right" href="#!">Repo</a>
					</div>
				</div>
			</footer>
	)
}
