import React, { FC } from 'react'

type ModalProps = {
	isVisible: boolean
	isError: boolean
	message: string
}

const Modal: FC<ModalProps> = ({ isVisible, isError, message }) => {
	return (
		<>
			<div className="bg-slate-600 fixed inset-0 z-40"></div>
			<div className="bg-white w-10 h-10 rounded-lg z-50">
				<h2 className="bg-slate-800">{message}</h2>
			</div>
		</>
	)
}

export default Modal
