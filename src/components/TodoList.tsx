import { ITodo } from 'models/ITodo'
import React, { FC, useEffect, useState } from 'react'
import TodoItem from './TodoItem'

type TodoListProps = {
	todos: ITodo[]
}

const TodoList: FC<TodoListProps> = ({ todos }) => {
	const [currentTodos, setCurrentTodos] = useState<ITodo[]>([])
	const [completedTodos, setCompletedTodos] = useState<ITodo[]>([])

	useEffect(() => {
		setCurrentTodos(todos.filter(todo => !todo.isCompleted))
		setCompletedTodos(todos.filter(todo => todo.isCompleted))
	}, [todos])

	return (
		<div className="xl:w-1/2 w-full mx-auto flex flex-col gap-5">
			<h2 className="text-3xl text-white my-2 font-bold">Задачи:</h2>
			{currentTodos && currentTodos.length > 0 ? (
				currentTodos.map((todo, index) => <TodoItem key={index} {...todo} />)
			) : (
				<h2 className="text-xl text-center text-white">У вас нету задач</h2>
			)}
			<h2 className="text-3xl text-white my-2 font-bold">
				Выполненные задачи:
			</h2>
			{completedTodos && completedTodos.length > 0 ? (
				completedTodos.map((todo, index) => <TodoItem key={index} {...todo} />)
			) : (
				<h4 className="text-xl text-center text-white">
					Вы еще не выполнили ни одну задачу
				</h4>
			)}
		</div>
	)
}

export default TodoList
