import React, { useEffect, useState, TransformStreamDefaultController } from 'react'
import { Movies } from '../components/Movies'
import { Preloader } from '../components/Preloader'
import { Search } from '../components/Search'
const API_KEY = process.env.REACT_APP_API_KEY

export const Main = () => {
	const [state, setstate] = useState([])
	const [isloading, setIsloading] = useState(true)

	useEffect(() => {
		fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&page=1&s=top`)
			.then(response => response.json())
			.then(data => setstate(data.Search, setIsloading(p => p = false)))
	}, [setstate])

	const searchMovies = (str, type = 'all') => {
		fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&page=1&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
			.then(response => response.json())
			.then(data => setstate(data.Search))
	}

	if (isloading) {
		return <Preloader />
	}


	return (
		<main className='conteiner content' >
			<div>
				<Search searchMovies={ searchMovies } />
				<Movies movies={ state } />

			</div>
		</main>
	)
}
