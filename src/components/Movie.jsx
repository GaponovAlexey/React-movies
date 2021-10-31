import React from 'react'

export const Movie = (props) => {
	const { Title: title, Year: year, imdbID: imdb, Poster: poster, Type: type } = props

	return (
		<div>
			<div className="card">
				<div className="card-image waves-effect waves-block waves-light">
					{
						poster === "N/A" ?
							<img className="activator" src={ ` https://via.placeholder.com/150x210?text=${title}` } /> :
							<img className="activator" src={ poster } />
					}

				</div>
				<div className="card-content">
					<span className="card-title activator grey-text text-darken-4">{ title }</span>
					<p>{ year }<span className='right'>{ type }</span></p>
				</div>
			</div>
		</div>
	)
}
