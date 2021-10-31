import React from 'react'

export const Footer = () => {
	return (

		<footer className="page-footer yellow lighten-5" >
			<div className="footer-copyright">
				<div className="container" style={ { color: 'black' } } >
					{ new Date().toLocaleDateString() } <br></br>Hello from React
					<a className="grey-text black text-lighten-4 right" href="https://github.com/kekelberi/demo">Repo</a>
				</div>
			</div>
		</footer>
	)
}
