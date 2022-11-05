import { useAppDispatch, useAppSelector } from 'hooks/redux'
import React, { FC, useEffect } from 'react'
import { setModal } from 'store/slices/modalSlices'
import { setTodos } from 'store/slices/todosSlices'
import TodoList from './TodoList'

const Todo: FC = () => {
	const dispatch = useAppDispatch()
	const todos = useAppSelector(state => state.todosSlices.todos)

	useEffect(() => {
		if (todos.length > 0) {
			return localStorage.setItem('todos', JSON.stringify(todos))
		}
	}, [todos])

	useEffect(() => {
		const todosFromStorage = localStorage.getItem('todos')
		if (todosFromStorage) {
			dispatch(setTodos(JSON.parse(todosFromStorage)))
		}
	}, [])

	const onClickAddButton = () => {
		dispatch(
			setModal({
				buttonTitle: 'Создать',
				modalTitle: 'Создание задачи',
				todo: {
					_id: todos.length + 1,
					title: '',
					description: '',
					completedAt: 0,
					createdAt: new Date().getTime(),
					image: '',
				},
				isVisible: true,
				actionOnClick: 'add',
			})
		)
	}

	return (
		<div className="container max-xl:max-w-2xl py-10 mx-auto px-2">
			<h2 className="text-5xl font-semibold text-white text-center mb-10">
				Do Task
			</h2>
			<TodoList todos={todos} />
			<div
				className="fixed bg-blue-500 right-5 bottom-5 py-2 px-4 text-white rounded-full text-4xl cursor-pointer hover:bg-blue-600 transition"
				onClick={onClickAddButton}
			>
				+
			</div>
		</div>
	)
}

export default Todo
