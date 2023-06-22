import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"
import { getServerSession } from "next-auth"
import { authOptions } from "../auth/[...nextauth]"

export default async function handler(req, res) {

  if(req.method == "POST") {
    let session = await getServerSession(req, res, authOptions)
    const db = (await connectDB).db("forum")
    let ck = await db.collection("like").find({post_id : JSON.parse(req.body)}).toArray();
    
    console.log("ck", ck)
    console.log('req.body', JSON.parse(req.body)) 
    if(ck == '') {
      req.body = JSON.parse(req.body)
      let information = {
        my_self_id : new ObjectId(session.user._id),
        post_id : new ObjectId(req.body.post_id),
        title : req.body.title
      }
      console.log("information", information)
      /* await db.collection("like").insertOne(information)  */  
      let result = await db.collection("like").countDocuments({post_id : new ObjectId(information.post_id)})
      console.log("result", result)
      return res.status(200).json(result)
    } else {
      return res.status(500).json("안됨")
    }
    /* else {
      console.log("ck가 있음", ck)
      console.log ("post_id", ck[0].post_id)
      console.log("req.body", req.body)
      if(ck[0].post_id == req.body) {
        console.log("ck", ck.post_id)
        console.log("req", req.body)
  
        if(ck.myself_id == session.user._id) {
          console.log("좋아요 누름")
          return res.status(500).json("이미 좋아요 했습니다.")
        }
      } else {
        console.log("ck", ck.post_id)
        console.log("req", req.body)
        return res.status(500).json("틀림")
      }
    } */
  }
    //console.log("ck", ck)
    
  /* console.log("요청", req.body)
  return res.staus(200).json("성공") */
}