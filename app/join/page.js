import { connectDB } from "@/util/database";

export default async function Join() {
  return (
    <div>
      <h4>회원가입</h4>
      <form action="/api/join" method="POST">
        <input name="id" placeholder="아이디"/>
        <input name="pw" placeholder="비밀번호"/>
        <input name="name" placeholder="이름"/>
        <button type="submit">가입하기</button>
      </form>
    </div>
  )
}