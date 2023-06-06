import { connectDB } from '@/util/database.js'
import {ObjectId} from "mongodb"

export default async function Detail(props) {
  const client = await connectDB;
  const db = client.db("forum")
  let result = await db.collection('post').findOne({ _id: new 
  ObjectId(props.params.id) })
  console.log("콘솔s" + result.title)
  return (
    <div>
      <h4>상세페이지</h4>
      <h4>{result.title}</h4>
      <p>{result.content}</p>
    </div>
  )
}