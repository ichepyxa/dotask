import { months } from 'constants/months'

export const formatDate = (date: Date) => {
	const day = date.getDate()
	const month = date.getMonth()
	const year = date.getFullYear()
	const time = date.toLocaleTimeString()

	return `${day} ${months[month - 1]} ${year} года, ${time}`
}
