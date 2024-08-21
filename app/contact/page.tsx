import { Center } from "@mantine/core";
import ContactSection from "./ContactSection";
import classes from "./ContactSection.module.css";

export default function Contact() {
	return (
		<Center
			h={"calc(100vh - 110px)"}
			w={"100vw"}
			id="events"
			className="text-white bg-[#140f14]">
			<ContactSection />
		</Center>
	);
}
