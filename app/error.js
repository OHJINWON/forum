'use client'
export default function Error(error, reset){
  return(
    <div>
      <h4>에러</h4>
      <button onClick={()=>{
        reset()
      }}>버튼</button>
    </div>
  )
}