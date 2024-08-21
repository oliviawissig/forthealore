import {
	Drawer,
	DrawerFactory,
	NavLink,
	PartialVarsResolver,
} from "@mantine/core";
import {
	IconHome2,
	IconConfetti,
	IconUsers,
	IconWritingSign,
	IconWorld,
	IconBrandYoutube,
	IconBrandInstagram,
	IconBrandSoundcloud,
	IconBrandTiktok,
	IconBrandDiscord,
	IconHistory,
} from "@tabler/icons-react";
import classes from "./MobileDrawer.module.css";

interface DrawerProps {
	opened: boolean;
	close: () => void;
}

export default function MobileDrawer({ opened, close }: DrawerProps) {
	return (
		<Drawer
			classNames={{
				content: classes.content,
				header: classes.header,
				close: classes.close,
			}}
			size="xs"
			radius="md"
			position="right"
			opened={opened}
			onClose={close}
			title="Navigation"
			zIndex={999}>
			<NavLink
				classNames={{
					label: "text-xl",
					body: classes.body,
					section: classes.section,
				}}
				href="/"
				label="Home"
				leftSection={<IconHome2 size="2rem" stroke={1.5} />}
			/>
			<NavLink
				classNames={{
					label: "text-xl",
					body: classes.body,
					section: classes.section,
				}}
				href="/events"
				label="Events"
				leftSection={<IconConfetti size="2rem" stroke={1.5} />}
			/>
			<NavLink
				classNames={{
					label: "text-xl",
					body: classes.body,
					section: classes.section,
				}}
				href="/team"
				label="Team"
				leftSection={<IconUsers size="2rem" stroke={1.5} />}
			/>
			<NavLink
				classNames={{
					label: "text-xl",
					body: classes.body,
					section: classes.section,
				}}
				href="/contact"
				label="Contact"
				leftSection={<IconWritingSign size="2rem" stroke={1.5} />}
			/>
			<NavLink
				classNames={{
					label: "text-xl",
					body: classes.body,
					section: classes.section,
				}}
				href="/archive"
				label="Archive"
				leftSection={<IconHistory size="2rem" stroke={1.5} />}
			/>
			<NavLink
				classNames={{
					label: "text-xl",
					body: classes.body,
					section: classes.section,
				}}
				href="/"
				label="Social"
				leftSection={<IconWorld size="2rem" stroke={1.5} />}>
				<NavLink
					classNames={{
						label: "text-xl",
						body: classes.body,
						section: classes.section,
					}}
					href="https://www.youtube.com/@forthealore"
					label="Youtube"
					leftSection={
						<IconBrandYoutube size="1.5rem" stroke={1.5} />
					}
				/>
				<NavLink
					classNames={{
						label: "text-xl",
						body: classes.body,
						section: classes.section,
					}}
					label="Instagram"
					href="https://www.instagram.com/forthealore/"
					leftSection={
						<IconBrandInstagram size="1.5rem" stroke={1.5} />
					}
				/>
				<NavLink
					classNames={{
						label: "text-xl",
						body: classes.body,
						section: classes.section,
					}}
					label="SoundCloud"
					href="https://soundcloud.com/forthealore?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
					leftSection={
						<IconBrandSoundcloud size="1.5rem" stroke={1.5} />
					}
				/>
				<NavLink
					classNames={{
						label: "text-xl",
						body: classes.body,
						section: classes.section,
					}}
					label="TikTok"
					href="https://www.tiktok.com/@forthealore"
					leftSection={<IconBrandTiktok size="1.5rem" stroke={1.5} />}
				/>
				<NavLink
					classNames={{
						label: "text-xl",
						body: classes.body,
						section: classes.section,
					}}
					label="Discord"
					href="https://discord.com/invite/HW2qtJvk8J"
					leftSection={
						<IconBrandDiscord size="1.5rem" stroke={1.5} />
					}
				/>
			</NavLink>
		</Drawer>
	);
}
