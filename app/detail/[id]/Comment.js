'use client'

import { useEffect, useState } from "react"

export default function Comment(props) {
  let [comment, setComment] = useState('')
 
  let [reply, setReply] = useState([])
  let [done, setDone] = useState('')
 
  console.log("comment", comment)
  useEffect(() => {
    fetch('/api/comment/list?id=' + props.id).then(r =>  r.json())
    .then((result) => {
      setReply(result)
    });
  }, []);
  return(
    <div>
      <div>댓글 목록 보여줄 부분</div>
      <div>댓글</div>
      {
        reply.length > 0 ?
          reply.map((a,i)=> 
            <div>
              <span>{a.name}<span key={i}>{a.reply}</span></span>
            </div>
          )
         : <span>댓글이 없습니다.</span>
      }
      <input name="reply" onChange={(e)=> {setComment(e.target.value)} }/>
      <button onClick={(e)=>{
        fetch('/api/comment/reply/', {
          method : 'POST', 
          body : JSON.stringify({reply : comment, id : props.id})})
        .then((r) => {
          if(r.status == 200) {
            return r.json()
          } else {
            return error
          }
        }).then((success)=>{
          setReply(success)
        })
        .catch((error)=>{
          alert(error)
        })
      }}>댓글전송</button>
    </div>
  )
}