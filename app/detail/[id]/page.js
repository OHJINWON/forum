import { connectDB } from '@/util/database.js'
import {ObjectId} from "mongodb"
import Comment from './Comment';
import { notFound } from 'next/navigation';

export default async function Detail(props) {
  const client = await connectDB;
  const db = client.db("forum")
  let result = await db.collection('post').findOne({ _id: new 
  ObjectId(props.params.id) })
  console.log("자세히보기_id" + result._id)
  
  if(result == null) {
    return notFound()
  }

  return (
    <div>
      <h4>상세페이지</h4>
      <h4>{result.title}</h4>
      <p>{result.content}</p>
      <Comment id={props.params.id}/>
    </div>
  )
}