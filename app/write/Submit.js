'use client'
export default function Submit() {
  return(
    <button type="button" onClick={(e)=>{
      e.preventDefault();
      alert("로그인 후 작성해주세요.")
    }}>작성</button>
  )
}