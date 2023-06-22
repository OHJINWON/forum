export default function handler(req, rep) {
  console.log(req.query)
  return rep.status(200).json('처리완료')
  
}