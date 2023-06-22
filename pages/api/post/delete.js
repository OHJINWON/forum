import { connectDB } from '@/util/database.js'
import {ObjectId} from "mongodb"

export default async function handler(req, res) {
  if(req.method == "POST") {
  const db = (await connectDB).db("forum")
  console.log(req.body)
  let result = await db.collection('post').deleteOne({_id : new ObjectId(req.body) })
  console.log("12" + result.deletedCount)
  if(result.deletedCount == 1) {
    return res.status(200).json("삭제 완료") 
  } else {
    return res.status(500).json("다시 시도해주세요") 
  }
  }
}