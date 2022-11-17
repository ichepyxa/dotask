import Background from 'components/Background'
import Modal from 'components/Modal'
import Todo from 'components/Todo'
import { useAppSelector } from 'hooks/redux'
import React, { useEffect, useState } from 'react'

function App() {
	const { isVisible: modalIsVisible } = useAppSelector(
		state => state.modalSlices.modal
	)
	const [src, setSrc] = useState<string>(
		'https://images.pexels.com/photos/1408221/pexels-photo-1408221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
	)

	useEffect(() => {
		setInterval(() => {
			fetch('https://random.imagecdn.app/2000/2000').then(response => {
				setSrc(response.url)
			})
		}, 5000000)
	}, [])

	return (
		<div className="overflow-hidden">
			<Background src={src} />
			{modalIsVisible ? <Modal /> : <></>}
			<Todo />
		</div>
	)
}

export default App
