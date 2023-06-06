import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb";

export default async function handler(request, response) {
  const client = await connectDB;
  const db = client.db("members")
  let join = request.body

  console.log(join)

  let result = await db.collection('people').findOne({ pw })
    console.log("결과2"  + result[0])
  if(request.method == "POST") {
    if(join.id == '' || join.pw == '' || join.name == '') {
      response.status(200).json("다시 입력해줘")
    }
    else {
      await db.collection('people').insertOne(join)  
      return response.redirect(302,"/list")
    }
    
  }
  /*  let join = request.body
  if(request.body.value == '') {
    console.log(join)
    return  response.status(500).json(join.userPhoneNumber)
*/
    /*
    
    return response.status(400).send(
      `<script>
        alert('빈칸입니다.');
        location.href="/join";
      </script>`)
*/  
//return response.redirect(302,"/join")
/*  }
*/
} 