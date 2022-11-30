import { theme } from "config"
import { MantineProvider } from "@mantine/core"
import { NotificationsProvider } from "@mantine/notifications"

const AppWrapper: ComponentWithChildren = ({ children }) => {
	return (
		<MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
			<NotificationsProvider>{children}</NotificationsProvider>
		</MantineProvider>
	)
}

export default AppWrapper
