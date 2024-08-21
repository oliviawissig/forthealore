import { Carousel } from "@mantine/carousel";
import { useMediaQuery, useViewportSize } from "@mantine/hooks";
import { Button, Paper, useMantineTheme, rem, Skeleton } from "@mantine/core";
import classes from "./CardCarousel.module.css";
import {
	IconArrowRight,
	IconArrowLeft,
	IconExternalLink,
} from "@tabler/icons-react";
import { Event } from "../api/events/route";

interface CardProps {
	date: Date;
	flyer: string;
	ticket_link: string;
	upcoming: boolean;
	name: string;
	loading: boolean;
}

function Card({ date, flyer, ticket_link, upcoming, loading }: CardProps) {
	const shortenDate = (tempDate: Date) => {
		const tempDate1 = new Date(tempDate);
		const months = [
			"JAN",
			"FEB",
			"MAR",
			"APR",
			"MAY",
			"JUN",
			"JUL",
			"AUG",
			"SEP",
			"OCT",
			"NOV",
			"DEC",
		];
		const shortMonth = months[tempDate1.getMonth()];

		return `${shortMonth}  ${tempDate1.getDate()}`;
	};

	return (
		<Paper
			shadow="md"
			p="xl"
			radius="md"
			style={{
				backgroundImage: `url(${flyer})`,
				filter: upcoming ? "" : "grayscale(75%)",
			}}
			className={classes.card}>
			<div className={classes.circleContainer}>
				{upcoming && (
					<div className={classes.circle}>
						<span>{shortenDate(date)}</span>
					</div>
				)}
			</div>
			<Button
				rightSection={
					<IconExternalLink
						style={{ width: rem(17), height: rem(17) }}
					/>
				}
				onClick={() => {
					window.open(`${ticket_link}`, "_ blank");
				}}
				variant={upcoming ? "white" : "filled"}
				color="dark">
				{upcoming ? "Get Tickets" : "More Information"}
			</Button>
		</Paper>
	);
}

interface CardCarouselProps {
	events: Event[];
	loading: boolean;
}

export default function CardCarousel({ events, loading }: CardCarouselProps) {
	const theme = useMantineTheme();
	const { height, width } = useViewportSize();
	const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

	const slides = events.map((item) => (
		<Carousel.Slide key={item.name}>
			<Card
				date={item.date}
				flyer={item.flyer}
				ticket_link={item.ticket_link}
				upcoming={item.upcoming}
				name={item.name}
			/>
		</Carousel.Slide>
	));

	return (
		<Carousel
			withIndicators={true} withControls={width < 768 ? false : true}
			slideSize={{ base: "100%", sm: "33.333%" }}
			slideGap={{ base: "xl", sm: 22 }}
			align="start"
			slidesToScroll={{ base: 1, md: 2 }}
			className="w-10/12 z-[999]"
			classNames={classes}
			nextControlIcon={
				<IconArrowRight
					style={{
						width: rem(35),
						height: rem(35),
						backgroundColor: "rgba(255, 255, 255, 0.5)",
						padding: rem(5),
						borderRadius: rem(30),
						marginRight: "-120px",
					}}
				/>
			}
			previousControlIcon={
				<IconArrowLeft
					style={{
						width: rem(35),
						height: rem(35),
						backgroundColor: "rgba(255, 255, 255, 0.5)",
						padding: rem(5),
						borderRadius: rem(30),
						marginLeft: "-120px",
					}}
				/>
			}>
			{slides}
		</Carousel>
	);
}
