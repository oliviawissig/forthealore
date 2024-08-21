"use client";
import { useEffect, useState } from "react";
import ArchiveSection from "./ArchiveSection";
import { Video } from "../api/videos/route";
import { Overlay } from "@mantine/core";

export default function Archive() {
	const [ids, setIds] = useState<Video[]>([]);
	const [idsLoading, setIdsLoading] = useState(true);

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

	useEffect(() => {
		foo3();
	}, []);

	return (
		<>
			<ArchiveSection ids={ids} loading={idsLoading} />
			<Overlay fixed color="#000" backgroundOpacity={0.55} zIndex={98}/>
		</>
	);
}
