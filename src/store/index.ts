import { combineReducers, configureStore } from '@reduxjs/toolkit'
import todosSlices from './slices/todosSlices'
import modalSlices from './slices/modalSlices'

const rootReducer = combineReducers({
	todosSlices,
	modalSlices,
})

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
	})
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
