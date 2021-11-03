import React, { useEffect, useState, TransformStreamDefaultController } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { Movies } from '../components/Movies'
import { Preloader } from '../components/Preloader'
import { Search } from '../components/Search'
import { fetchMovieActions } from '../redux/reduser'
const API_KEY = process.env.REACT_APP_API_KEY

export const Main = () => {

	const { status, movies } = useSelector(state => state.movi)

	
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
				<Search  />
				<Movies movies={ movies } />

			</div>
		</main>
	)
}
