import { useAppDispatch } from 'hooks/redux'
import { ITodo } from 'models/ITodo'
import React, { FC, useState } from 'react'
import { setModal } from 'store/slices/modalSlices'
import { removeTodo } from 'store/slices/todosSlices'

interface TodoItemProps extends ITodo {}

const TodoItem: FC<TodoItemProps> = ({
	_id,
	title,
	description,
	image,
	completedAt,
	createdAt,
}) => {
	const dispatch = useAppDispatch()
	const [isShowDetails, setIsShowDetails] = useState<boolean>(false)

	const toggleShowDetails = () => setIsShowDetails(!isShowDetails)
	const onClickDeleteButton = () => dispatch(removeTodo(_id))
	const onClickEditButton = () => {
		dispatch(
			setModal({
				buttonTitle: 'Редактировать',
				modalTitle: 'Редактирование задачи',
				todo: {
					_id,
					title,
					description,
					completedAt,
					createdAt,
					image,
				},
				isVisible: true,
				actionOnClick: 'edit',
			})
		)
	}

	return (
		<div className="shadow shadow-slate-500 p-6 rounded-2xl bg-white">
			<div className="flex justify-between items-center">
				<h2 className="text-slate-800 font-medium text-lg">
					{title.length > 15 ? `${title.substring(0, 15)}...` : title}
				</h2>
				{isShowDetails ? (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="text-slate-500 cursor-pointer hover:text-slate-800 transition"
						width="40"
						height="40"
						viewBox="0 0 24 24"
						strokeWidth="2"
						stroke="currentColor"
						fill="none"
						onClick={toggleShowDetails}
					>
						<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
						<line x1="18" y1="6" x2="6" y2="18"></line>
						<line x1="6" y1="6" x2="18" y2="18"></line>
					</svg>
				) : (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="text-slate-500 cursor-pointer hover:text-slate-800 transition"
						width="40"
						height="40"
						viewBox="0 0 24 24"
						strokeWidth="2"
						stroke="currentColor"
						fill="none"
						onClick={toggleShowDetails}
					>
						<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
						<polyline points="6 9 12 15 18 9"></polyline>
					</svg>
				)}
			</div>

			{isShowDetails ? (
				<div>
					<div className="mt-3 text-md break-all">
						{description.length > 0 ? description : 'Описание отсутствует'}
					</div>
					<div className="mt-5 flex justify-end gap-3 items-center">
						<button
							className="bg-red-500 cursor-pointer py-2 px-4 rounded-2xl text-white max-sm:w-full flex justify-center items-center hover:bg-red-600 transition"
							onClick={onClickDeleteButton}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="32"
								height="32"
								strokeWidth="2"
								viewBox="0 0 24 24"
								stroke="currentColor"
								fill="none"
							>
								<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
								<line x1="4" y1="7" x2="20" y2="7"></line>
								<line x1="10" y1="11" x2="10" y2="17"></line>
								<line x1="14" y1="11" x2="14" y2="17"></line>
								<path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
								<path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
							</svg>
						</button>
						<button
							className="bg-blue-500 cursor-pointer py-2 px-4 rounded-2xl text-white max-sm:w-full flex justify-center items-center hover:bg-blue-600 transition"
							onClick={onClickEditButton}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="32"
								height="32"
								viewBox="0 0 24 24"
								strokeWidth="2"
								stroke="currentColor"
								fill="none"
							>
								<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
								<path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1"></path>
								<path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z"></path>
								<path d="M16 5l3 3"></path>
							</svg>
						</button>
					</div>
				</div>
			) : (
				<></>
			)}
		</div>
	)
}

export default TodoItem
