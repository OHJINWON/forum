import { connectDB } from "@/util/database";

export default async function handler(요청, 응답) {
  
  if(요청.method == "POST") {
    console.log(요청.body)
    if(요청.body.title == '') {
      return 응답.status(500).json("제목이 빈칸입니다.")
    }
    return 응답.redirect(302,'/list')
  }
}