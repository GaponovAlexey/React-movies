import { configureStore } from '@reduxjs/toolkit'
import  mainReduser from './reduser'


export default configureStore({
	reducer: {
		movi: mainReduser,
	},
})