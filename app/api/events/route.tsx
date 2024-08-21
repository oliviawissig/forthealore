import { db } from "@/app/firebase/config";
import { collection, getDocs, query } from "firebase/firestore";
import { NextRequest, NextResponse } from "next/server";

export type Event = {
	date: Date;
	flyer: string;
	ticket_link: string;
	name: string;
	upcoming: boolean;
};

export async function GET(request: NextRequest) {
	const q = query(collection(db, "events"));
	let events: Event[] = [];

	const response = await getDocs(q).then((querySnapshot) => {
		querySnapshot.docs.map((doc) => {
			let eventData = {
				date: new Date(0),
				flyer: "",
				ticket_link: "",
				name: "",
				upcoming: true,
			};
			eventData.date = doc.data().date.toDate();
			eventData.flyer = doc.data().flyer;
			eventData.ticket_link = doc.data().ticket_link;
			eventData.name = doc.data().name;
			eventData.upcoming = doc.data().upcoming;
			events.push(eventData);
		});
	});

	events.sort((a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf());

	let tempEvents: Event[] = [];
	let tempEvents2: Event[] = [];
	events.forEach((e) => {
		if (e.upcoming) tempEvents.push(e);
		else tempEvents2.push(e);
	});

	tempEvents.sort((a, b) => new Date(a.date).valueOf() - new Date(b.date).valueOf());
	const eventsFinal: Event[] = tempEvents.concat(tempEvents2);

	return NextResponse.json(eventsFinal);
}
