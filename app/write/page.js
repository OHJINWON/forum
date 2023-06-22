
import { getServerSession } from "next-auth";
import Alert from "./Alert";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import Submit from "./submit";

export default async function Write(props) {
  let session = await getServerSession(authOptions)
  console.log(session)
  if(session) {
    return (
      <div className="p-20">
        <h4>글작성</h4>
          <form action="/api/write" method="POST">
            <input id="title" name="title" placeholder="이름"/>
            <input id="content" name="content" placeholder="콘텐츠"/>
            <button type="sumbit">작성</button>
          </form>
      </div>
    ) 
  } else {
    return <div>로그인하세요</div>
  }
  
}