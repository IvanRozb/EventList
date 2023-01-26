import { getEventById, getFeaturedEvents } from "@/helper/api-util";
import { Fragment } from "react";
import EventLogistics from "@/components/event-detail/event-logistics";
import EventContent from "@/components/event-detail/event-content";
import EventSummary from "@/components/event-detail/event-summary";
import classes from "../../styles/Home.module.css";

export default function EventDetailPage(props) {
	const event = props.event;
	if (!event) {
		return (
			<div className={classes.center}>
				<p>Loading...</p>
			</div>
		);
	}
	return (
		<Fragment>
			<EventSummary title={event.title} />
			<EventLogistics
				date={event.date}
				address={event.location}
				image={event.image}
				imageAlt={event.title}
			/>
			<EventContent>
				<p>{event.description}</p>
			</EventContent>
		</Fragment>
	);
}

export async function getStaticProps(context) {
	// console.log("here id...props");
	return {
		props: {
			event: await getEventById(context.params.id),
		},
		revalidate: 30,
	};
}

export async function getStaticPaths() {
	// console.log("here id...path");
	const events = await getFeaturedEvents();
	const ids = events.map((event) => event.id);

	const allPaths = ids.map((id) => ({
		params: {
			id: id,
		},
	}));
	return {
		paths: allPaths,
		fallback: "blocking",
	};
}
