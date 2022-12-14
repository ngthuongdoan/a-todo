import { AppProps } from "next/app"
import Head from "next/head"
import AppWrapper from "components/AppWrapper"

export default function App(props: AppProps) {
	const { Component, pageProps } = props

	return (
		<>
			<Head>
				<title>Page title</title>
				<meta
					name="viewport"
					content="minimum-scale=1, initial-scale=1, width=device-width"
				/>
			</Head>

			<Head>
				<title>Page title</title>
				<meta
					name="viewport"
					content="minimum-scale=1, initial-scale=1, width=device-width"
				/>
			</Head>
			<AppWrapper>
				<Component {...pageProps} />
			</AppWrapper>
		</>
	)
}
