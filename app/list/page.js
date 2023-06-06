import { connectDB } from '@/util/database.js';
import Link from 'next/link';
import DetailLink from './DetailLink';

export default async function List(props) {

  const client = await connectDB;
  const db = client.db("forum")
  let result = await db.collection('post').find().toArray()

  let today = new Date();

  let month = today.getMonth()+1
  let date = today.getDate()
  let day = today.getDay()

  let dayArray = ['일','월','화','수','목','금','일']

  console.log(result)
  
  return (
    <div className="list-bg">
      {
        result.map((a,i)=> {
          return(
            <div className="list-item" key={i}>
              <Link href={'/detail/'+result[i]._id}>
                <h4>{result[i].title}</h4>
              </Link>
              <Link href={'/edit/' + result[i]._id}>수정</Link>
              <p>{month + "/" + date + "/" + dayArray[day]}</p>
            </div>
          )
        })
      }
    </div>
  )
} 