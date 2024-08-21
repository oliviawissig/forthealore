import { SimpleGrid } from "@mantine/core";
import { TeamMember } from "../api/team/route";
import TeamCard from "./TeamCard";

interface TeamSectionProps {
	team: TeamMember[];
}

export default function TeamGrid({ team }: TeamSectionProps) {

	return (
		<SimpleGrid className="z-[999]" cols={{base: 2, md: 4}} spacing="xs" verticalSpacing="xs">
			{team.map((a, key) => {
				return (
					<div key={key}>
						<TeamCard
							name={a.name}
							instagram={a.instagram}
							image={a.image}
							desc={a.desc}
						/>
					</div>
				);
			})}
		</SimpleGrid>
	);
}
