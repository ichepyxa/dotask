import { ITodo } from './ITodo'

export interface IModal {
	isVisible: boolean
	modalTitle: string
	buttonTitle: string
	todo: ITodo
	actionOnClick: string
}
