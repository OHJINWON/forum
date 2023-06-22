import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";

export default async function handler(req, res) {
  let session = await getServerSession(req, res, authOptions)
  console.log(session.user.email)
  const db = (await connectDB).db("forum")
  const information = req.body
  if(session) {
    req.body.author = session.user.email
  }
  console.log(req.body)
  if(req.method == "POST") {
    if(information.title == '') {
      return res.status(500).json("제목이 빈칸입니다.")
    } else if (information.content == '') {
      return res.status(500).json("콘텐츠가 빈칸입니다.")  
    } else {
      let result = await db.collection('post').insertOne(req.body)
      return res.redirect(302,'/list')
    }
  }
}