import { Center } from "@mantine/core"
import AuthWrapper from "components/AuthWrapper"

export const AppLayout: ComponentWithChildren = ({ children }) => {
	return (
		<AuthWrapper>
			<Center h="100vh" bg="#efeef5">
				{children}
			</Center>
		</AuthWrapper>
	)
}
