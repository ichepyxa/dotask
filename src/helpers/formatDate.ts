import { months } from 'constants/months'

export const formatDate = (date: Date) => {
	const day = date.getDay()
	const month = date.getMonth()
	const year = date.getFullYear()
	const time = date.toLocaleTimeString()

	return `${day} ${months[month]} ${year} года, ${time}`
}
