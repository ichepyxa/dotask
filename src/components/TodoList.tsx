import { ITodo } from 'models/ITodo'
import React, { FC } from 'react'
import TodoItem from './TodoItem'

type TodoListProps = {
	todos: ITodo[]
}

const TodoList: FC<TodoListProps> = ({ todos }) => {
	return (
		<div className="xl:w-1/2 w-full mx-auto flex flex-col gap-5">
			{todos && todos.length > 0 ? (
				todos.map((todo, index) => <TodoItem key={index} {...todo} />)
			) : (
				<h2 className="text-3xl text-center text-white">У вас нету задач</h2>
			)}
		</div>
	)
}

export default TodoList
