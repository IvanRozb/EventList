import EventList from "@/components/events/event-list";
import { getFeaturedEvents } from "@/helper/api-util";
import Head from "next/head";
import NewsletterRegistration from "@/components/input/newsletter-registration";

export default function Home(props) {
	const featuredEvents = props.featuredEvents;
	return (
		<div>
			<Head>
				<title>Event List</title>
				<meta name={"description"} content={"All Featured Events"} />
			</Head>
			<NewsletterRegistration />
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
