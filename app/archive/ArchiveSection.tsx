"use client";
import { Button, Center, Container, Flex, Loader, SimpleGrid, Text } from "@mantine/core";
import { YouTubeEmbed } from "@next/third-parties/google";
import { Video } from "../api/videos/route";
import { IconArrowRight, IconExternalLink } from "@tabler/icons-react";
import { scroller } from "react-scroll";
import classes from "./ArchiveSection.module.css";
import { useViewportSize } from "@mantine/hooks";
import { useEffect } from "react";

interface ArchiveSectionProps {
	ids: Video[];
	loading: boolean;
}

export default function ArchiveSection({ ids, loading }: ArchiveSectionProps) {
	const { height, width } = useViewportSize();
	const youtubeWidth = width < 1200 ? (width < 450 ? 300 : 400) : 500;

	return (
		<Center
			className={classes.archive}
			h={{ base: "140vh", md: "110vh" }}
			w={"100vw"}
			id="events">
			<Flex
				miw={"85%"}
				maw={"85%"}
				align="center"
				direction="column"
				wrap="wrap"
				className="z-[999]">
				<Text className="mb-8" size="3rem" c="white">
					Archive
				</Text>
				{loading ? (
					<Loader className="z-[99]" size={100} color="white" />
				) : (
					<>
						<SimpleGrid cols={{ base: 1, md: 2 }}>
							{ids.map((id) => (
								<Container px={0} className="z-[999] rounded-lg relative pb-[56.25%] h-0">
									<YouTubeEmbed style="position:absolute; top:0; left:0; width:100%; height:100%; border-radius:6px;" width={youtubeWidth}
										videoid={id.id}
										params="controls=0"
									/>
								</Container>
							))}
						</SimpleGrid>
						<Button
							variant="default"
							size="lg"
							className="mt-8"
							rightSection={<IconExternalLink size={18} />}
							onClick={() => {
								window.open(
									"https://www.youtube.com/@forthealore/featured",
									"_blank"
								);
							}}>
							See More
						</Button>
					</>
				)}
			</Flex>
		</Center>
	);
}
