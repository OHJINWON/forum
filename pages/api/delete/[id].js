import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"
import { getServerSession } from "next-auth"
import { authOptions } from "../auth/[...nextauth]"

export default async function handler(req, res) {

  let session = await getServerSession(req, res, authOptions)
  const db = (await connectDB).db("forum")

  let author = await db.collection('post').findOne({_id : new ObjectId(req.query)})
  let email = session.user.email

  if(req.method == 'GET') {
    if(author.author == email || session.user.authority == 'admin') {
      const result = await db.collection("post").deleteOne({_id : new ObjectId(req.query)})
      return res.status(200).json(result)
    } 
    return res.status(500).json("같은 사용자가 아닙니다.")
  }
  return res.status(500).json("받아오는 형식이 다름")
}