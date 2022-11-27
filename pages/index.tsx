import { Box, Center, Container, createStyles, Title } from "@mantine/core"

const useStyles = createStyles((theme) => ({
	wrapper: {
		width: "100%",
		height: "100vh",
		backgroundColor:
			theme.colorScheme === "dark"
				? theme.colors.dark[8]
				: theme.colors.blue[2],
		border: `1px solid ${
			theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[3]
		}`,

		[`@media (max-width: ${theme.breakpoints.sm}px)`]: {
			flexDirection: "column-reverse",
			padding: theme.spacing.xl,
		},
		overflow: "hidden",
	},
	body: {
		width: "100%",
		height: "100%",
		backgroundColor:
			theme.colorScheme === "dark"
				? theme.colors.dark[8]
				: theme.colors.blue[6],
		overflow: "auto",
	},
}))

export default function Home() {
	const { classes } = useStyles()
	return (
		<main className={classes.wrapper}>
			<Center className={classes.body}>
				<div>All elements inside Center are centered</div>
			</Center>
		</main>
	)
}
