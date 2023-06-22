
import { connectDB } from '@/util/database.js';
import { MongoClient } from 'mongodb'

/* 누가 페이지 방문 시 60초 지나면 캐싱 */ 
/* export const revalidate = 60; */

export default async function Home() {

/*   const client = await connectDB;
  const db = client.db("forum")
  let result = await db.collection('post').find().toArray() */
  
  /* GET요청 결과 캐싱기능
  await fetch('/URL', {cache: 'force-cache'}) */

  /* 서버로 요청 새로 날림
  await fetch('/URL', {cache: 'no-store'}) */
/* 
60초마다 캐싱된 데이터 갱신해줌
하드 용량 많이 필요함
  await fetch('/URL', {next : {revalidate : 60}})
 */
  return (
    <div>안녕</div>
  )
}
