import Modal from 'components/Modal'
import Todo from 'components/Todo'
import { useAppSelector } from 'hooks/redux'
import React from 'react'

function App() {
	const { isVisible: modalIsVisible } = useAppSelector(
		state => state.modalSlices.modal
	)

	return (
		<>
			{modalIsVisible ? <Modal /> : <></>}
			<Todo />
		</>
	)
}

export default App
