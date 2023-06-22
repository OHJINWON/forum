'use client'

import { useEffect } from "react";
import Link from 'next/link';
export default function ListItem({result}) {

  //html부터 보여지가 떄문에 검색엔직에 최적화가 안되있음
  /*useEffect(()=> {

  })*/

  let today = new Date();

  let month = today.getMonth()+1
  let date = today.getDate()
  let day = today.getDay()

  let dayArray = ['일','월','화','수','목','금','일']

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
                    alert("서버문제")
                  }
                }).then((result)=> {
                  alert(result)
                  e.target.parentElement.style.opacity = 0;
                  setTimeout(()=>{
                    e.target.parentElement.style.display = 'none'
                  },1000)
                }).then((error)=>{
                  console.log(error)
                })
              }}>삭제{result[i]._id}</span>
              <p>{month + "/" + date + "/" + dayArray[day]}</p>
            </div>
          )
        })
      }
    </div>
  )
}