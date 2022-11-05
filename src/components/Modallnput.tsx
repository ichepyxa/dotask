import React, { FC } from 'react'

type ModallnputProps = {
	labelText: string
	inputName: string
	inputValue: string
	inputValueOnChange: CallableFunction
	classNameForInput?: string
	isTextArea?: boolean
}

const Modallnput: FC<ModallnputProps> = ({
	labelText,
	inputName,
	inputValue,
	inputValueOnChange,
	classNameForInput,
	isTextArea,
}) => {
	return (
		<div className="flex flex-col mt-5 gap-2">
			<label htmlFor={inputName} className="text-xl font-medium">
				{labelText}
			</label>
			{isTextArea ? (
				<textarea
					name={inputName}
					value={inputValue}
					onChange={e => inputValueOnChange(e.target.value)}
					className={`border-2 border-slate-600 rounded-lg outline-none focus:border-blue-500 px-4 py-2 text-lg transition resize-none ${classNameForInput}`}
					rows={6}
				></textarea>
			) : (
				<input
					type="text"
					name={inputName}
					value={inputValue}
					onChange={e => inputValueOnChange(e.target.value)}
					className={`border-2 border-slate-600 rounded-lg outline-none focus:border-blue-500 px-4 py-2 text-lg transition ${classNameForInput}`}
				/>
			)}
		</div>
	)
}

export default Modallnput
