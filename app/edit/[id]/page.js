import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import Link from "next/link";

export default async function Edit(props) {
  
  const client = await connectDB
  const db = client.db("forum")

  let result = await db.collection('post').findOne({ _id: new 
    ObjectId(props.params.id) })
  return (
    <div className="p-20">
      <h1>글 수정하는 곳</h1>
      <form method="POST" action="/api/post/new">
        <input name="_id" defaultValue={result._id.toString()} style={{display:'none'}}/>
        <input name="title" type="text" defaultValue={result.title}/>
        <input name="content" type="text" defaultValue={result.content}/>
        <button type="submit">수정하기</button>
      </form>
    </div>
  )
}