import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IModal } from 'models/IModal'

type ModalState = {
	modal: IModal
}

const initialState: ModalState = {
	modal: {} as IModal,
}

export const modalSlices = createSlice({
	name: 'modal',
	initialState: initialState,
	reducers: {
		setModal(state, action: PayloadAction<IModal>) {
			state.modal = action.payload
		},
		setModalIsVisible(state, action: PayloadAction<boolean>) {
			state.modal.isVisible = action.payload
		},
	},
})

export const { setModal, setModalIsVisible } = modalSlices.actions
export default modalSlices.reducer
