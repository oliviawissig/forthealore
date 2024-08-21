import { Avatar, Text, Button, Paper } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";

interface TeamCardProps {
	name: string;
	desc: string;
	instagram: string;
	image: string;
}

export default function TeamCard({ name, desc, instagram, image }: TeamCardProps) {
	const { height, width } = useViewportSize();
	const avatarSize = width < 500 ? 120 : 170;

	return (
		<Paper
			radius="md"
			withBorder
			p="lg"
			bg="var(--mantine-color-body)"
			className="z-[999]">
			<Avatar
				src={`${image}`}
				size={avatarSize}
				radius="md"
				mx="auto"
			/>
			<Text ta="center" fz="lg" fw={500} mt="md">
				{name}
			</Text>
			<Text ta="center" c="dimmed" fz="sm">
				{desc}
			</Text>


			<Button
				onClick={() => {
					window.open (`${instagram}`, '_ blank');
				}}
				variant="default"
				fullWidth
				mt="md">
				Instagram
			</Button>
		</Paper>
	);
}
