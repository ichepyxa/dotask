import Background from 'components/Background'
import Modal from 'components/Modal'
import Todo from 'components/Todo'
import { useAppSelector } from 'hooks/redux'
import React from 'react'

function App() {
	const { isVisible: modalIsVisible } = useAppSelector(
		state => state.modalSlices.modal
	)

	return (
		<div className="overflow-hidden">
			<Background src="https://images.pexels.com/photos/2531709/pexels-photo-2531709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
			{modalIsVisible ? <Modal /> : <></>}
			<Todo />
		</div>
	)
}

export default App
