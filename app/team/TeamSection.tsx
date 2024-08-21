import { Center, Flex, Loader, Text } from "@mantine/core";
import TeamGrid from "./TeamGrid";
import { TeamMember } from "../api/team/route";

interface TeamSectionProps {
	team: TeamMember[];
	loading: boolean;
}

export default function TeamSection({ team, loading }: TeamSectionProps) {
	return (
		<Center
			h={{ base: "120vh", md: "calc(100vh - 110px)" }}
			w={"100w"}
			id="team"
			className="text-white">
			<Flex maw={"85vw"} align="center" direction="column" wrap="wrap">
				<Text className="z-[99] mb-8" size="4rem" c="white">
					TEAM
				</Text>
				{loading ? (
					<Loader className="z-[99]" size={100} color="white" />
				) : (
					<TeamGrid team={team} />
				)}
			</Flex>
		</Center>
	);
}
