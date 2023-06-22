'use client'

import { usePathname, useRouter } from "next/navigation"

export default function DetailLink() {
  let router = useRouter()
  let a = usePathname()
  let b = usePathname()
  return (
    <div>
      <button onClick={()=>{ router.push('/')}}>버튼</button>
    </div>
  )
}