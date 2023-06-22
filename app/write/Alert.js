'use client'
export default function Alert(props) {
  return(
    <div>
      <button type="submit" onClick={()=> {
        alert(props)
        console.log("제발" + props)
      }
        }>버튼</button>
    </div>
  )
}