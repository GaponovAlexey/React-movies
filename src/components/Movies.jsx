import React from 'react'
import { Movie } from './Movie'

export const Movies = ({ movies = [] }) => {
	return (
		<div className='movies' >
			{ movies.length ? movies.map(m => <Movie key={ m.imdbID } { ...m } />) : <h4>ничего не найдено</h4> }
		</div>
	)
}
