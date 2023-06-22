import { connectDB } from "@/util/database"
import { getServerSession } from "next-auth"
import { authOptions } from "../auth/[...nextauth]"
import { ObjectId } from "mongodb"

export default async function handler(req, res) {

  let session = await getServerSession(req, res, authOptions)
  if(req.method == 'POST') {
    if(session) {
      req.body = JSON.parse(req.body)
      let information = {
        name : session.user.name,
        reply : req.body.reply,
        parents_id : new ObjectId(req.body.id),
        authority : session.user.authority
      }
      const db = (await connectDB).db("forum")
      await db.collection('comment').insertOne(information)
      let result = await db.collection('comment')
      .find({parents_id : new ObjectId(req.body.id)}).toArray()
      return res.status(200).json(result)
    }
  }
  return res.status(500).json("실패")
}