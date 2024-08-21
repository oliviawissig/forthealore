import { Center, Flex, Loader, Skeleton, Text } from "@mantine/core";
import { Event } from "../api/events/route";
import CardCarousel from "./CardCarousel";

interface EventsSectionProps {
	events: Event[];
	loading: boolean;
	padding: string;
}

export default function EventsSection({
	events,
	loading,
	padding,
}: EventsSectionProps) {
	return (
		<Flex
			miw={"85%"}
			maw={"85%"}
			align="center"
			direction="column"
			wrap="wrap" className={`mt-${padding}`}>
			<Text className="mb-8 z-[99]" size="3rem" c="white">
				EVENTS
			</Text>
			{loading ? (
				<Loader className="z-[99]" size={100} color="white" />
			) : (
				<CardCarousel events={events} loading={loading} />
			)}
		</Flex>
	);
}
