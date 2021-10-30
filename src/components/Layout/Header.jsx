import React from 'react'

export const Header = () => {
	return (
		<>
			<nav className='purple lighten-4'>
				<div  className="nav-wrapper">
					<a href="!#" className="brand-logo right">Movies</a>
					<ul id="nav-mobile" className="left hide-on-med-and-down">
						<li><a href="!#">asend</a></li>
						{/*<li><a href="badges.html">Components</a></li>*/}
						{/*<li><a href="collapsible.html">JavaScript</a></li>*/}
					</ul>
				</div>
			</nav>
		</>
	)
}

