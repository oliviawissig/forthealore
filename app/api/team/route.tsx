import { db } from "@/app/firebase/config";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { NextRequest, NextResponse } from "next/server";

export type TeamMember = {
  name: string;
  desc: string;
  instagram: string;
  image: string;
};

export async function GET(request: NextRequest) {
  const q = query(collection(db, "team"), orderBy("desc", "desc"));
  let team: TeamMember[] = [];

  const response = await getDocs(q).then((querySnapshot) => {
    querySnapshot.docs.map((doc) => {
      let teamData = {
        name: '',
        instagram: '',
        image: '',
        desc: ''
      };
      teamData.name = doc.data().name;
      teamData.instagram = doc.data().instagram;
      teamData.image = doc.data().image;
      teamData.desc = doc.data().desc;
      team.push(teamData);
    });
  });

  const teamJson = JSON.parse(JSON.stringify(team));
  return NextResponse.json(teamJson);
}