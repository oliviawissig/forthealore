import { db } from "@/app/firebase/config";
import {
	query,
	collection,
	getDocs,
	Timestamp,
	orderBy,
} from "firebase/firestore";
import { NextRequest, NextResponse } from "next/server";

export type Video = {
	id: string;
	timestamp: Date;
};

export async function GET(request: NextRequest) {
	const q = query(collection(db, "videos"));
	let ids: Video[] = [];

	const response = await getDocs(q).then((querySnapshot) => {
		querySnapshot.docs.map((doc) => {
			doc.data().ids.forEach((id: Video) => {
				let idData = {
					timestamp: new Date(0),
					id: "",
				};
				idData.timestamp = id.timestamp;
				idData.id = id.id;
				ids.push(idData);
			});
		});
	});

	ids.sort((a, b) => new Date(b.timestamp).valueOf() - new Date(a.timestamp).valueOf());

	const idJson = JSON.parse(JSON.stringify(ids));
	return NextResponse.json(idJson);
}
