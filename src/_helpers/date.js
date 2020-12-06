

export const formatDate = (date) => {
	const options = {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		timezone: 'UTC',
	}

	const formattedDate = new Date(+date[0], (+date[1]-1), +date[2])

	return formattedDate.toLocaleString("ru", options);
}

