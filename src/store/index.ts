import { combineReducers, configureStore } from '@reduxjs/toolkit'
import todosSlices from './slices/todosSlices'

const rootReducer = combineReducers({
	todosSlices,
})

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
	})
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
