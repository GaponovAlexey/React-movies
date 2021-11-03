import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const API_KEY = process.env.REACT_APP_API_KEY


export const fetchMovieActions = createAsyncThunk(
	'movie/fetchMovieActions',
	async function (_, { dispatch, rejectWithValue }) {
		try {
			const response = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=top`)
			if (!response.ok) {
				throw new Error('get eerro')
			}
			const data = await response.json()
			return data.Search
		} catch (error) {
			return rejectWithValue(error.massage)
		}
	}
)
export const searchMovies = createAsyncThunk(
	'movie/searchMovies',
	async function (str, { rejectWithValue, dispatch }) {
		try {
			const response = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${str}`)
			if (!response.ok) {
				throw new Error('delet error')
			}
			const data = await response.json()
			return data.Search
		} catch (e) {
			return rejectWithValue(e.massage)
		}
	}
)


export const mainReduser = createSlice({
	name: 'movie',
	initialState: {
		movies: []
	},
	reducers: {
		Searchsss: (state, action) => {
			state.movies = action.payload
		},
		removeMovie: (state, action) => {
			state.movies = state.movies.filter(s => s.id !== action.payload)
		}
	},
	extraReducers: {
		[fetchMovieActions.pending]: (state) => {
			state.status = 'loading'
			state.error = null
		},
		[fetchMovieActions.fulfilled]: (state, action) => {
			state.status = 'resolvet'
			state.movies = action.payload
		},
		[fetchMovieActions.rejected]: (state, action) => {
			state.status = 'rejected'
			state.errir = action.payload
		},
		[searchMovies.fulfilled]: (state, action) => {
			state.status = 'resolve'
			state.movies = action.payload
		}
	}
})

export const { Searchsss, removeMovie } = mainReduser.actions

export default mainReduser.reducer

