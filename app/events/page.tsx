"use client";
import { useEffect, useState } from "react";
import EventsSection from "./EventsSection";
import { Event } from "../api/events/route";
import { Center } from "@mantine/core";

export default function Events() {
	const [events, setEvents] = useState<Event[]>([]);
	const [eventsLoading, setEventsLoading] = useState(true);

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
		foo2();
	}, []);

	return (
		<Center
			h={"calc(100vh - 110px)"}
			w={"100vw"}
			id="events"
			className="text-white bg-[#140f14]">
			<EventsSection padding="10" events={events} loading={eventsLoading} />
		</Center>
	);
}
