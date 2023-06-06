import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  if(req.method == "POST") {
    const imformation = req.body

    let change = {
      title : imformation.title, 
      content : imformation.content
    }
    const db = (await connectDB).db("forum")

    await db.collection('post').updateOne({
      _id : new ObjectId(imformation._id)},
      {$set : change})
    return res.redirect(302,'/list')
  }
}