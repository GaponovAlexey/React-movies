import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const API_KEY = process.env.REACT_APP_API_KEY


export const fetchMovieActions = createAsyncThunk(
	'movie/fetchMovieActions',
	async function (_, { dispatch, rejectWithValue }) {
		try {
			const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&page=1&s=top`)
			if (!response.ok) {
				throw new Error('get eerro')
			}
			const data = await response.json()
			return data.Search
			//return dispatch(addMovie(data.Search))
		} catch (error) {
			return rejectWithValue(error.massage)
		}
	}
)
export const deletMovies = createAsyncThunk(
	'movie/delete',
	async function (id, { rejectWithValue, dispatch }) {
		try {
			const r = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&page=1&s=top${id}`, {
				method: 'DELETE'
			})
			console.log(r);
			if (!r.ok) {
				throw new Error('delet error')
			}
			return dispatch(removeMovie(id))
		} catch (e) {

		}
	}
)


export const mainReduser = createSlice({
	name: 'movie',
	initialState: {
		movies: []
	},
	reducers: {
		addMovie: (state, action) => {
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
		}
	}
})

export const { addMovie, removeMovie } = mainReduser.actions

export default mainReduser.reducer

