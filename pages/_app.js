import Layout from "@/components/layout/layout";
import Head from "next/head";

export default function App({ Component, pageProps }) {
	return (
		<Layout>
			<Head>
				<title>Next Events</title>
				<meta name={"description"} content={""} />
				<meta
					name={"viewport"}
					content={"initial-scale=1.0, width=device-width"}
				/>
			</Head>
			<Component {...pageProps} />
		</Layout>
	);
}
