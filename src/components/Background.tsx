import React, { FC } from 'react'

type BackgroundProps = {
	src: string
}

const Background: FC<BackgroundProps> = ({ src }) => {
	return (
		<>
			<div className="w-full h-full fixed -z-40 inset-0 bg-black/60"></div>
			<img
				src={src}
				className="fixed inset-0 w-full h-full object-cover -z-50"
			/>
		</>
	)
}

export default Background
