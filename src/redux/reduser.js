import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const API_KEY = process.env.REACT_APP_API_KEY


export const fetchMovieActions = createAsyncThunk(
	'movie/fetchMovieActions',
	async function (_, { dispatch }) {
		//const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&page=1&s=top`)
		const response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=a605fa0d`)
		const data = await response.json()
		return dispatch(addMovie(data))
	}
)



export const mainReduser = createSlice({
	name: 'movie',
	initialState: {
		movies: [
			{ id: 1, name: 'da' },
			{ id: 2, name: 'net' }
		]
	},
	reducers: {
		addMovie: (state, action) => {
			state.movies += action.payload
		},
	},
	//extraReducers: {
	//	[fetchMovieActions.fulfilled]: (state, action) => {
	//		state.movies = action.payload
	//	}
	//}
})

export const { addMovie } = mainReduser.actions

export default mainReduser.reducer

