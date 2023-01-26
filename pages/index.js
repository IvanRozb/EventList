import EventList from "@/components/events/event-list";
import { getFeaturedEvents } from "@/helper/api-util";

export default function Home(props) {
	const featuredEvents = props.featuredEvents;
	console.log(featuredEvents);
	return (
		<div>
			<EventList events={featuredEvents} />
		</div>
	);
}

export async function getStaticProps() {
	return {
		props: {
			featuredEvents: await getFeaturedEvents(),
		},
		revalidate: 1800,
	};
}
