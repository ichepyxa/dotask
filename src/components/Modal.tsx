import { useAppDispatch, useAppSelector } from 'hooks/redux'
import React, { FC, FormEvent, useState } from 'react'
import { setModalIsVisible } from 'store/slices/modalSlices'
import Modallnput from './Modallnput'

const Modal: FC = () => {
	const dispatch = useAppDispatch()
	const { title, modalTitle, description, buttonTitle } = useAppSelector(
		state => state.modalSlices.modal
	)
	const [inputTitle, setInputTitle] = useState<string>(title)
	const [inputDescription, setInputDescription] = useState<string>(description)

	const onClick = (e: FormEvent<HTMLButtonElement>) => {
		e.preventDefault()

		// if (inputTitle)
	}

	const closeModal = () => {
		dispatch(setModalIsVisible(false))
	}

	return (
		<>
			<div
				className="bg-slate-600/50 fixed inset-0 z-40"
				onClick={closeModal}
			></div>
			<form className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white sm:max-w-md w-11/12 sm:w-full rounded-lg z-50 px-6 py-10">
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
					inputName="name"
					inputValue={inputTitle}
					inputValueOnChange={setInputTitle}
				/>
				<Modallnput
					labelText="Описание"
					inputName="description"
					inputValue={inputDescription}
					inputValueOnChange={setInputDescription}
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
