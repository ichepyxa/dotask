import { ITodo } from 'models/ITodo'
import React, { FC } from 'react'
import TodoItem from './TodoItem'

type TodoListProps = {
	todos: ITodo[]
}

const TodoList: FC<TodoListProps> = ({ todos }) => {
	return (
		<div className="max-2xl:w-1/2 max-lg:w-full mx-auto flex flex-col gap-5">
			{todos.map(todo => (
				<TodoItem key={todo._id} {...todo} />
			))}
		</div>
	)
}

export default TodoList
