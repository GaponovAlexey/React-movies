import React from 'react'

export const Header = () => {
	return (
		<>
			<nav className='purple yellow lighten-5'>
				<div className="nav-wrapper">
					<a href="!#" className="brand-logo right" style={ { color: 'black' } } >Movies</a>
					<ul id="nav-mobile" className="left hide-on-med-and-down">
						<li><a href="http://localhost:3000/" style={ { color: 'black' } }>Home</a></li>
						{/*<li><a href="badges.html">Components</a></li>*/ }
						{/*<li><a href="collapsible.html">JavaScript</a></li>*/ }
					</ul>
				</div>
			</nav>
		</>
	)
}

