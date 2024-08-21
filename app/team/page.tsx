"use client";
import { useEffect, useState } from "react";
import TeamSection from "./TeamSection";
import { TeamMember } from "../api/team/route";
import { Center, Overlay } from "@mantine/core";

export default function Team() {
	const [team, setTeam] = useState<TeamMember[]>([]);
	const [teamLoading, setTeamLoading] = useState(true);

	const foo = async () => {
		const response = await fetch(
			`${process.env.NEXT_PUBLIC_API_URL}/api/team`
		);

		if (response.ok) {
			const teamTeam = await response.json();
			console.log(teamTeam);
			setTeam(teamTeam);
			setTeamLoading(false);
		}
	};

	useEffect(() => {
		foo();
	}, []);

	return (
		<>
			<TeamSection team={team} loading={teamLoading}/>
			<Overlay fixed color="#000" backgroundOpacity={0.55} zIndex={98}/>
		</>
	);
}
