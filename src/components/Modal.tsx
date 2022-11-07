import { useAppDispatch, useAppSelector } from 'hooks/redux'
import React, { FC, FormEvent, useEffect, useState } from 'react'
import { setModalIsVisible } from 'store/slices/modalSlices'
import { addTodo, changeTodo } from 'store/slices/todosSlices'
import Modallnput from './Modallnput'

const Modal: FC = () => {
	const dispatch = useAppDispatch()
	const { todo, modalTitle, buttonTitle, actionOnClick } = useAppSelector(
		state => state.modalSlices.modal
	)
	const [inputTitle, setInputTitle] = useState<string>(todo.title)
	const [inputDescription, setInputDescription] = useState<string>(
		todo.description
	)
	const [isValidInputTitle, setIsValidInputTitle] = useState<boolean | null>(
		null
	)

	const onClick = (e: FormEvent<HTMLButtonElement>) => {
		e.preventDefault()

		if (inputTitle.length === 0) {
			return setIsValidInputTitle(false)
		}

		if (isValidInputTitle) {
			if (actionOnClick === 'add') {
				dispatch(
					addTodo({
						...todo,
						title: inputTitle,
						description: inputDescription,
					})
				)
			}

			if (actionOnClick === 'edit') {
				dispatch(
					changeTodo({
						...todo,
						title: inputTitle,
						description: inputDescription,
					})
				)
			}

			closeModal()
		}
	}

	useEffect(() => {
		if (inputTitle.length === 0) {
			return setIsValidInputTitle(null)
		}

		if (inputTitle.length < 3) {
			return setIsValidInputTitle(false)
		}

		setIsValidInputTitle(true)
	}, [inputTitle])

	const closeModal = () => dispatch(setModalIsVisible(false))

	return (
		<>
			<div
				className="bg-slate-600/50 fixed inset-0 z-40"
				onClick={closeModal}
			></div>
			<form
				className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white sm:max-w-md w-11/12 sm:w-full rounded-lg z-50 px-6 py-10 animate-fadeIn transition-all`}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="text-slate-500 cursor-pointer hover:text-slate-800 transition absolute top-3 right-3"
					width="30"
					height="30"
					viewBox="0 0 24 24"
					strokeWidth="2"
					stroke="currentColor"
					fill="none"
					onClick={closeModal}
				>
					<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
					<line x1="18" y1="6" x2="6" y2="18"></line>
					<line x1="6" y1="6" x2="18" y2="18"></line>
				</svg>
				<h2 className="text-slate-600 text-center text-2xl font-semibold uppercase">
					{modalTitle}
				</h2>
				<Modallnput
					labelText="Название"
					inputName="title"
					inputValue={inputTitle}
					inputValueOnChange={setInputTitle}
					classNameForInput={
						isValidInputTitle === null
							? ''
							: isValidInputTitle
							? ''
							: '!border-red-500'
					}
				/>
				<Modallnput
					labelText="Описание"
					inputName="description"
					inputValue={inputDescription}
					inputValueOnChange={setInputDescription}
					isTextArea={true}
				/>
				<button
					type="submit"
					className="border-2 rounded-lg px-6 py-2 mx-auto w-full block mt-10 text-blue-500 border-blue-500 text-xl hover:border-blue-600 hover:bg-blue-600 hover:text-white transition"
					onClick={onClick}
				>
					{buttonTitle}
				</button>
			</form>
		</>
	)
}

export default Modal
