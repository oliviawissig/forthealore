import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function POST(request: NextRequest) {
	if (request.method !== "POST") {
		return new Response(
			JSON.stringify({ message: "Only POST requests allowed" }),
			{ status: 405 }
		);
	}

	const body = await request.json();
	const token = body.token;

	if (!token) {
		return new Response(JSON.stringify({ message: "Token not found" }), {
			status: 405,
		});
	}

	const res = await axios.post(
		`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`
	);

	if (res.data.success) {
		return new Response(JSON.stringify({ message: "Success" }), {
			status: 200,
		});
	} else {
		return new Response(JSON.stringify({ message: "Failed to verify" }), {
			status: 405,
		});
	}
}
