import React, { FC } from 'react'

type ModallnputProps = {
	labelText: string
	inputName: string
	inputValue: string
	inputValueOnChange: CallableFunction
}

const Modallnput: FC<ModallnputProps> = ({
	labelText,
	inputName,
	inputValue,
	inputValueOnChange,
}) => {
	return (
		<div className="flex flex-col mt-5 gap-2">
			<label htmlFor={inputName} className="text-xl font-medium">
				{labelText}
			</label>
			<input
				type="text"
				name={inputName}
				value={inputValue}
				onChange={e => inputValueOnChange(e.target.value)}
				className="border-2 border-slate-600 rounded-lg outline-none focus:border-blue-500 px-4 py-2 text-lg transition"
			/>
		</div>
	)
}

export default Modallnput
