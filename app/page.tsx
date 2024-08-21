"use client";
import { Button, Center, Flex, Overlay, Text } from "@mantine/core";
import "./globals.css";
import { useEffect, useState } from "react";
import { Element, scroller } from "react-scroll";
import { IconArrowRight } from "@tabler/icons-react";
import EventsSection from "./events/EventsSection";
import ArchiveSection from "./archive/ArchiveSection";
import { Event } from "./api/events/route";
import { Video } from "./api/videos/route";
import { useViewportSize } from "@mantine/hooks";

export default function Home() {
	const [events, setEvents] = useState<Event[]>([]);
	const [eventsLoading, setEventsLoading] = useState(true);
	const [ids, setIds] = useState<Video[]>([]);
	const [idsLoading, setIdsLoading] = useState(true);

	const { height, width } = useViewportSize();

	const scrollOptions = {
		duration: 1000,
		delay: 25,
		smooth: true,
	};

	const foo3 = async () => {
		const response = await fetch(
			`${process.env.NEXT_PUBLIC_API_URL}/api/videos`
		);

		if (response.ok) {
			const tempVideos = await response.json();
			setIds(tempVideos);
			setIdsLoading(false);
		}
	};

	const foo2 = async () => {
		const response = await fetch(
			`${process.env.NEXT_PUBLIC_API_URL}/api/events`
		);

		if (response.ok) {
			const tempEvents = await response.json();
			setEvents(tempEvents);
			setEventsLoading(false);
		}
	};

	useEffect(() => {
		foo3();
	}, []);

	useEffect(() => {
		foo2();
	}, [eventsLoading]);

	return (
		<>
			<main>
				<Center
					h={"100vh"}
					w={"100vw"}
					id="main"
					className="text-white overflow-hidden -z-[999]">
					<Flex
						gap="sm"
						justify="center"
						align="center"
						direction="column"
						wrap="wrap"
						className="z-[99] w-3/4 md:w-100">
						<Text
							className="text-center leading-[105px] md:leading-[135px]"
							size={width > 992 ? "6rem" : "4rem"}
							c="white">
							Making memories through melodies
						</Text>
						<Button
							variant="default"
							size="lg"
							rightSection={<IconArrowRight size={20} />}
							onClick={() => {
								scroller.scrollTo("events", scrollOptions);
							}}>
							Upcoming Events
						</Button>
					</Flex>
					<Overlay
						fixed
						color="#000"
						backgroundOpacity={0.55}
						zIndex={9}
					/>
				</Center>

				<Element name="events">
					<Center
						h={"100vh"}
						w={"100vw"}
						id="events"
						className="text-white bg-[#140f14]">
						<EventsSection
							events={events}
							loading={eventsLoading}
							padding="0"
						/>
					</Center>
				</Element>

				<ArchiveSection ids={ids} loading={idsLoading} />
			</main>
		</>
	);
}
