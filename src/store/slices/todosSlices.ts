import { ITodo } from 'models/ITodo'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type TodosState = {
	todos: ITodo[]
}

const initialState: TodosState = {
	todos: [] as ITodo[],
}

export const todosSlices = createSlice({
	name: 'todos',
	initialState: initialState,
	reducers: {
		setTodos(state, action: PayloadAction<ITodo[]>) {
			state.todos = action.payload
		},
		addTodo(state, action: PayloadAction<ITodo>) {
			state.todos.push(action.payload)
		},
		removeTodo(state, action: PayloadAction<number>) {
			state.todos = state.todos.filter(todo => todo._id !== action.payload)
		},
		changeTodo(state, action: PayloadAction<ITodo>) {
			state.todos = state.todos.map(todo =>
				todo._id === action.payload._id ? action.payload : todo
			)
		},
	},
})

export const { setTodos, addTodo, changeTodo, removeTodo } = todosSlices.actions
export default todosSlices.reducer
