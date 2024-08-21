import { Container, Group, ActionIcon, rem, Image } from "@mantine/core";
import {
	IconBrandYoutube,
	IconBrandInstagram,
	IconBrandSoundcloud,
	IconBrandTiktok,
	IconBrandDiscord,
} from "@tabler/icons-react";
import classes from "./Footer.module.css";

export default function Footer() {
	return (
		<div className={classes.footer}>
			<Container className={classes.inner}>
				<Image src="/logo.png" h={35} />
				<Group
					gap={0}
					className={classes.links}
					justify="flex-end"
					wrap="nowrap">
					<ActionIcon
						component="a"
						target="_blank"
						size="xl"
						color="white"
						variant="subtle"
						href="https://www.instagram.com/forthealore/">
						<IconBrandInstagram
							style={{ width: rem(25), height: rem(25) }}
							stroke={1.5}
						/>
					</ActionIcon>
					<ActionIcon
						component="a"
						target="_blank"
						size="xl"
						color="white"
						variant="subtle"
						href="https://www.youtube.com/@forthealore">
						<IconBrandYoutube
							style={{ width: rem(25), height: rem(25) }}
							stroke={1.5}
						/>
					</ActionIcon>
					<ActionIcon
						component="a"
						target="_blank"
						size="xl"
						color="white"
						variant="subtle"
						href="https://soundcloud.com/forthealore?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing">
						<IconBrandSoundcloud
							style={{ width: rem(25), height: rem(25) }}
							stroke={1.5}
						/>
					</ActionIcon>
					<ActionIcon
						component="a"
						target="_blank"
						size="xl"
						color="white"
						variant="subtle"
						href="https://www.tiktok.com/@forthealore">
						<IconBrandTiktok
							style={{ width: rem(25), height: rem(25) }}
							stroke={1.5}
						/>
					</ActionIcon>
					<ActionIcon
						component="a"
						target="_blank"
						size="xl"
						color="white"
						variant="subtle"
						href="https://discord.com/invite/HW2qtJvk8J">
						<IconBrandDiscord
							style={{ width: rem(25), height: rem(25) }}
							stroke={1.5}
						/>
					</ActionIcon>
				</Group>
			</Container>
		</div>
	);
}
