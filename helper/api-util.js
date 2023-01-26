export async function getAllEvents() {
	const data = await fetch(
		"https://nextjs-course-86a6c-default-rtdb.firebaseio.com/events.json"
	).then((response) => response.json());

	return Object.keys(data).map((key) => {
		return { id: key, ...data[key] };
	});
}

export async function getFeaturedEvents() {
	const events = await getAllEvents();

	return events.filter((event) => {
		return event.isFeatured === true;
	});
}

export async function getEventById(id) {
	const events = await getAllEvents();

	return events.find((event) => event.id === id);
}

export async function getFilteredEvents(dateFilter) {
	const events = await getAllEvents();
	const { year, month } = dateFilter;

	return events.filter((event) => {
		const eventDate = new Date(event.date);
		return (
			eventDate.getFullYear() === year &&
			eventDate.getMonth() === month - 1
		);
	});
}
