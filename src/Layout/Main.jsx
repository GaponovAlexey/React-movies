import React, { useEffect, useState, TransformStreamDefaultController } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { Movies } from '../components/Movies'
import { Preloader } from '../components/Preloader'
import { Search } from '../components/Search'
import { fetchMovieActions,  Searchsss } from '../redux/reduser'
const API_KEY = process.env.REACT_APP_API_KEY

export const Main = () => {

	const { status, movies } = useSelector(state => state.movi)


	//const [state, setstate] = useState([])
	//const [isloading, setIsloading] = useState(true)

	//useEffect(() => {
	//	fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&page=1&s=top`)
	//		.then(response => response.json())
	//		.then(data => setstate(data.Search, setIsloading(p => p = false)))
	//}, [setstate])

	//const searchMovies = (str, type = 'all') => {
	//	fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&page=1&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
	//		.then(response => response.json())
	//		.then(data => setstate(data.Search))
	//}

	
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(fetchMovieActions())
	}, [])
	
	if (status === 'loading') {
		return <Preloader />
	}
	return (
		<main className='conteiner content' >
			<div>
				<Search searchMovies={ Searchsss } />
				<Movies movies={ movies } />

			</div>
		</main>
	)
}
