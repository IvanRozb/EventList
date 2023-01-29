import EventList from "@/components/events/event-list";
import EventSearch from "@/components/events/event-search";

import { Fragment } from "react";
import { useRouter } from "next/router";
import { getAllEvents } from "@/helper/api-util";
import Head from "next/head";
import Comments from "@/components/input/comments";

export default function AllEventsPage(props) {
	const events = props.events;

	const router = useRouter();

	function findsEventsHandler(year, month) {
		const fullPath = `/events/${year}/${month}`;

		router.push(fullPath);
	}

	return (
		<Fragment>
			<Head>
				<title>Event List</title>
				<meta name={"description"} content={"All Events"} />
			</Head>
			<EventSearch onSearch={findsEventsHandler} />
			<EventList events={events} />
			<Comments />
		</Fragment>
	);
}

export async function getStaticProps() {
	const events = await getAllEvents();

	return {
		props: {
			events: events,
		},
		revalidate: 60,
	};
}
