
export default function handler(요청, 응답) {
  let today = new Date()
  let year = today.getFullYear()
  let month = today.getMonth() + 1
  let date = today.getDate()
  let day = today.getDay()
  let array = ['일','월','화','수','목','금','토','일']
  let hours = today.getHours(); // 시
  let minutes = today.getMinutes();  // 분
  let seconds = today.getSeconds();  // 초

  if(요청.method == 'POST') {
    return 응답.status(200).json("post: " + year + "/" + month + "/" + date + "/" + array[day]
    + "시간: " + hours + ":" + minutes + ":" + seconds)
  }
  if(요청.method == 'GET') {
    return 응답.status(200).json("get: "+ year + "/" + month + "/" + date + "/" + array[day]
    + "시간: " + hours + ":" + minutes + ":" + seconds)
  }
}