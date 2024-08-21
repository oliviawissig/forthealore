"use client";
import {
	Menu,
	Group,
	Center,
	Burger,
	Container,
	Image,
	rem,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
	IconBrandDiscord,
	IconBrandInstagram,
	IconBrandSoundcloud,
	IconBrandTiktok,
	IconBrandYoutube,
	IconChevronDown,
} from "@tabler/icons-react";
import classes from "./NavBar.module.css";
import { scroller } from "react-scroll";
import Link from "next/link";
import MobileDrawer from "./MobileDrawer";

const links = [
	{ link: "/", label: "Home" },
	{ link: "/events", label: "Events" },
	{ link: "/team", label: "Team" },
	{ link: "/contact", label: "Contact" },
	{
		link: "#1",
		label: "Social",
		links: [
			{
				link: "https://www.youtube.com/@forthealore",
				label: "Youtube",
				icon: (
					<IconBrandYoutube
						style={{ width: rem(15), height: rem(15) }}
						stroke={1.5}
					/>
				),
			},
			{
				link: "https://www.instagram.com/forthealore/",
				label: "Instagram",
				icon: (
					<IconBrandInstagram
						style={{ width: rem(15), height: rem(15) }}
						stroke={1.5}
					/>
				),
			},
			{
				link: "https://soundcloud.com/forthealore?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
				label: "SoundCloud",
				icon: (
					<IconBrandSoundcloud
						style={{ width: rem(15), height: rem(15) }}
						stroke={1.5}
					/>
				),
			},
			{
				link: "https://www.tiktok.com/@forthealore",
				label: "TikTok",
				icon: (
					<IconBrandTiktok
						style={{ width: rem(15), height: rem(15) }}
						stroke={1.5}
					/>
				),
			},
			{
				link: "https://discord.com/invite/HW2qtJvk8J",
				label: "Discord",
				icon: (
					<IconBrandDiscord
						style={{ width: rem(15), height: rem(15) }}
						stroke={1.5}
					/>
				),
			},
		],
	},
];

export default function NavBar() {
	const [opened, { toggle, close }] = useDisclosure(false);

	const scrollOptions = {
		duration: 1000,
		delay: 25,
		smooth: true,
		// ... other options
	};

	function oliviaScroll(link: string) {
		scroller.scrollTo(`${link}`, scrollOptions);
	}

	const items = links.map((link) => {
		const menuItems = link.links?.map((item) => (
			<Menu.Item
				component="a"
				target="_blank"
				href={item.link}
				key={item.label}
				leftSection={item.icon}>
				{item.label}
			</Menu.Item>
		));

		if (menuItems) {
			return (
				<Menu
					classNames={classes}
					offset={24}
					key={link.label}
					trigger="hover"
					transitionProps={{ exitDuration: 0 }}
					withinPortal
					position="bottom-start">
					<Menu.Target>
						<a
							href="/"
							className={classes.link}
							onMouseDown={() => oliviaScroll(link.link)}>
							<Center>
								<span className={classes.linkLabel}>
									{link.label}
								</span>
								<IconChevronDown size="0.9rem" stroke={1.5} />
							</Center>
						</a>
					</Menu.Target>
					<Menu.Dropdown className={classes.dropdown}>
						{menuItems}
					</Menu.Dropdown>
				</Menu>
			);
		}

		return (
			<Link
				key={link.label}
				href={link.link}
				className={classes.link}
				onMouseDown={() => oliviaScroll(link.link)}>
				{link.label}
			</Link>
		);
	});

	return (
		<header className={classes.header}>
			<MobileDrawer opened={opened} close={close} />
			<Container fluid size="md" className={classes.container}>
				<div className={classes.inner}>
					<Image src="/logo.png" h={30} />
					<Group gap={5} visibleFrom="sm">
						{items}
					</Group>
					<Burger
						opened={opened}
						onClick={toggle}
						size="md"
						hiddenFrom="sm"
						color="white"
					/>
				</div>
			</Container>
		</header>
	);
}
