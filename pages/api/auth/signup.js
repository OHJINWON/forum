import { connectDB } from "@/util/database";
import bcrypt from 'bcrypt';
import { ObjectId } from "mongodb";


export default async function handler(req, res) {
  if (req.method == 'POST') {
    if(req.body.name == '') {
      res.status(500).json("이름을 다시 입력해주새요")
    } else if(req.body.email == '') {
      res.status(500).json("이메일 다시 입력해주세요")
    } else if(req.body.password == ''){
      res.status(500).json("비번을 다시 입력해주세요")
    } else {
      let db = (await connectDB).db('forum');
      let member = await db.collection('user_cred').find().toArray()
      member.map(async (a,i) => {
        console.log(member[i].email)
        if(req.body.email == member[i].email) {
          res.status(500).json("이메일이 중복입니다.")
        } else {
          console.log("가입")
          console.log(req.body.email)
          console.log(member.email)
          let hash = await bcrypt.hash(req.body.password, 10)
          req.body.password = hash;
          await db.collection('user_cred').insertOne(req.body);
          return res.status(200).json('가입성공');
        }
      })
      
    }
  }
}