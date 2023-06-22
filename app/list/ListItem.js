'use client'
import Link from 'next/link';
import { useEffect, useState } from 'react';
export default async function ListItem({result}) {

  //html부터 보여지가 떄문에 검색엔직에 최적화가 안되있음
  /*useEffect(()=> {

  })*/
  let today = new Date();

  let month = today.getMonth()+1
  let date = today.getDate()
  let day = today.getDay()
  let dayArray = ['일','월','화','수','목','금','일']

  let [count, setCount] = useState(0)
  /* useEffect(()=>{
    fetch("/api/like/like")
    .then(r => r.json())
    .then((result)=> {
      alert(result)
      setCount(result)
    })
    .catch((error)=> {
      alert("틀림")
      return error
    })
  }) */
  console.log("count", count)
  return (
    <div>
      {
        result.map((a,i)=> {
          return(
            <div className="list-item" key={i}>
              <Link href={'/detail/'+result[i]._id}>
                <h4>{result[i].title}</h4>
              </Link>
              <Link href={'/edit/' + result[i]._id}>수정</Link> 
              <span onClick={(e)=> {
                /* fetch('/api/post/delete', {method : 'POST', body : result[i]._id})
                .then((r)=>{
                  return r.json()
                }).then(()=> {
                  e.target.parentElement.style.opacity = 0;
                  setTimeout(()=>{
                    e.target.parentElement.style.display = 'none'
                  },1000)
                }) */
                fetch('/api/delete/' + result[i]._id)
                .then((r)=> {
                  if(r.status == 200) {
                    return r.json()
                  } else {
                    return error
                  }
                }).then((result)=> {
                  e.target.parentElement.style.opacity = 0;
                  setTimeout(()=>{
                    e.target.parentElement.style.display = 'none'
                  },1000)
                }).catch((error)=>{
                  alert("사용자가 다릅니다.")
                  console.log("에러메세지"+error)
                })
              }}>삭제</span>
              <span onClick={(e)=> {
                fetch('/api/like/like/', {method : 'POST',
                body : JSON.stringify({post_id : result[i]._id, title : result[i].title})})
                .then((r)=>{
                  if(r.status==200) {
                    return r.json()
                  } else {
                    return error
                  }
                }).then((result)=>{
                  alert(result)
                  console.log("result+1", result)
                  setCount(result)
                  return result
                }).catch((error)=> {
                  alert(error)
                  return error
                }) 
              }}>좋아요 {count}개</span>
              <p>{month + "/" + date + "/" + dayArray[day]}</p>
            </div>
          )
        })
      }
    </div>
  )
}