import Document, {
	DocumentContext,
	DocumentInitialProps,
	Head,
	Html,
	Main,
	NextScript,
} from "next/document"
import { resetServerContext } from "react-beautiful-dnd"
import { ServerStyles, createStylesServer } from "@mantine/next"

// optional: you can provide your cache as a fist argument in createStylesServer function
const stylesServer = createStylesServer()

export default class _Document extends Document {
	static async getInitialProps(
		ctx: DocumentContext
	): Promise<DocumentInitialProps> {
		const initialProps = await Document.getInitialProps(ctx)
		resetServerContext()
		return {
			...initialProps,
			styles: [
				initialProps.styles,
				<ServerStyles
					html={initialProps.html}
					server={stylesServer}
					key="styles"
				/>,
			],
		}
	}
	render() {
		return (
			<Html>
				<Head />
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}
