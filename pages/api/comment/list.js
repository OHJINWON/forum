import { connectDB } from "@/util/database";
import { Collection, ObjectId } from "mongodb";

export default async function handler(req, res) {

  const db = (await connectDB).db("forum")
  let result = await db.collection('comment')
  .find({parents_id : new ObjectId(req.query.id) }).toArray()
  res.status(200).json(result)
/*   result.map((a,i)=> {
    if(req.query.id == result[i].parents_id) {
      console.log(result[i].reply)
      let results = result[i].reply
      res.status(200).json(results)
    }
  }) */
}