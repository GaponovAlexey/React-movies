import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { removeMovie } from '../redux/reduser'

export const Movie = (props) => {
	const { Title: title, Year: year, imdbID: imdb, Poster: poster, Type: type } = props
	const dispatch = useDispatch()

	//useEffect(() => {
		//dispatch(removeMovie(imdb))
	//}, [])

	return (
		<div>
			<div className="card">
				<div className="card-image waves-effect waves-block waves-light"
					onClick={ () => dispatch(removeMovie(imdb)) }
				>
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
