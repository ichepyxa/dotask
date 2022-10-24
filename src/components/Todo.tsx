import { todos } from 'data/Todos'
import React, { FC } from 'react'
import TodoList from './TodoList'

const Todo: FC = () => {
	return (
		<div className="container py-10 mx-auto px-2">
			<h2 className="text-5xl font-semibold text-slate-800 text-center mb-10">
				Do Task
			</h2>
			<TodoList todos={todos} />
			<div className="fixed bg-blue-500 right-5 bottom-5 py-3 px-5 text-white rounded-full text-4xl cursor-pointer hover:bg-blue-600 transition">
				+
			</div>
		</div>
	)
}

export default Todo
