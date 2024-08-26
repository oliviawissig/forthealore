"use client";
import {
	Button,
	Center,
	Stack,
	Text,
	Textarea,
	TextInput,
} from "@mantine/core";
import classes from "./ContactSection.module.css";
import { useForm } from "@mantine/form";
import { IconBubble, IconMail, IconSignature } from "@tabler/icons-react";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "@emailjs/browser";

export default function ContactSection() {
	const recaptchaRef = useRef() as MutableRefObject<ReCAPTCHA>;
	const [error, setError] = useState(false);
	const [errorMsg, setErrorMsg] = useState("");
	const [submitted, setSubmitted] = useState(false);
	const [btnLoading, setBtnLoading] = useState(false);

	const form = useForm({
		mode: "uncontrolled",
		initialValues: {
			name: "",
			email: "",
			message: "",
		},

		validate: {
			name: (value) =>
				value.length < 2 ? "Name must have at least 2 letters" : null,
			email: (value) =>
				/^\S+@\S+$/.test(value) ? null : "Invalid email",
			message: (value) =>
				value.length < 5
					? "Messages must be 5 characters or longer."
					: null,
		},
	});

	const handleSubmit = (values: {
		name: string;
		email: string;
		message: string;
	}) => {
		const recaptchaValue = recaptchaRef.current.getValue();

		const params = {
			...values,
			"g-recaptcha-response": recaptchaValue,
		};

		if (error) {
			setErrorMsg("Invalid Captcha, try again");
		} else {
			if (error) {
				setErrorMsg("Invalid Captcha, try again");
				emailjs
					.send(
						`${process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID}`,
						`${process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID}`,
						params,
						`${process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY}`
					)
					.then(
						() => {
							setSubmitted(true);
						},
						(error: { text: any }) => {
							setBtnLoading(false);
							setError(true);
							setErrorMsg(`Error sending message! ${error.text}`);
							return;
						}
					);
			}
		}
	};

	function handleOnChange() {
		setError(false);
		setErrorMsg("");
	}

	return (
		<Center
			h={"calc(100vh - 110px)"}
			w={"100vw"}
			className={classes.contact}>
			{submitted ? (
				<Text c="white" size="2rem" ta="center">
					Thank you for your note! <br></br>
					<br></br> Someone will reach out soon.
				</Text>
			) : (
				<>
					<Text className="z-[999]" size="3rem" c="white">
						Contact Form
					</Text>
					<form
						className={classes.contactForm}
						onSubmit={form.onSubmit((values) => {
							setBtnLoading(true);
							handleSubmit(values);
						})}>
						<TextInput
							leftSection={<IconSignature color="black" />}
							withAsterisk
							size="md"
							radius="md"
							label="Name"
							placeholder="Your name"
							key={form.key("name")}
							{...form.getInputProps("name")}
						/>

						<TextInput
							leftSection={<IconMail color="black" />}
							withAsterisk
							size="md"
							radius="md"
							label="Email"
							placeholder="Where should we contact you?"
							key={form.key("email")}
							{...form.getInputProps("email")}
						/>

						<Textarea
							leftSection={<IconBubble color="black" />}
							leftSectionProps={{
								style: {
									alignSelf: "flex-start",
									paddingTop: "7px",
								},
							}}
							autosize
							minRows={3}
							withAsterisk
							size="md"
							radius="md"
							label="Message"
							placeholder="What's up?"
							key={form.key("message")}
							{...form.getInputProps("message")}
						/>
						<Stack justify="center" align="center" mt="md">
							<ReCAPTCHA
								ref={recaptchaRef}
								className={classes.recaptcha}
								sitekey={`${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
								theme="dark"
								{...form.getInputProps("recaptcha")}
								onChange={handleOnChange}
							/>
							{error && <Text c="red">{errorMsg}</Text>}
							<Button
								loading={btnLoading}
								size="lg"
								type="submit"
								color="var(--brand-color-red)">
								Send
							</Button>
						</Stack>
					</form>
				</>
			)}
		</Center>
	);
}
