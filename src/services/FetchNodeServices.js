import axios from "axios"



// const ServerURL = "http://192.168.0.182:8000"
// const ServerURL = "http://127.0.0.1:8000"
// const ServerURL = "http://192.168.1.16:8001"
// const ServerURL = "http://192.168.0.146:8000"
// const ServerURL = "http://103.242.225.195:8000"
// const ServerURL = "http://192.168.0.44:8001"
// const ServerURL = "http://192.168.0.10:8000"
const ServerURL = "http://10.24.248.121:4000";
// const ServerURL = "http://192.168.137.190:8001"
// const ServerURL = "http://54.234.191.244"
// const ServerURL = "http://13.233.231.179:80"
// const ServerURL = "http://13.233.231.179:8000"




const getData = async (url) => {
  try {
    var response = await fetch(`${ServerURL}/${url}`, {
      headers: { authorization: `bearer ${JSON.parse(localStorage.getItem("tokenKey"))}` }
      // headers: { Authorization: `token ${getDecreyptedData("tokenKey")}` }
    })
    var result = await response.json()
    return (result)

  } catch (e) {
    return (null)
  }
}

const putData = async (url, body) => {
  try {
    var response = await axios.put(`${ServerURL}/${url}`, body, {
      // headers: { Authorization: `token ${getDecreyptedData("tokenKey")}` }
      headers: { authorization: `bearer ${JSON.parse(localStorage.getItem("tokenKey"))}` }
    })
    var result = await response.data
    return (result)
  }
  catch (error) {
    console.log(error)
    return (false)
  }
}



const postData = async (url, body ) => {
  try {
    var response = await axios.post(`${ServerURL}/${url}`, body, {
      // headers: { Authorization: `token ${getDecreyptedData("tokenKey")}` }
         headers: { Authorization: `token ${JSON.parse(localStorage.getItem("tokenKey"))}` }
    })
    var result = await response.data
    return (result)
  }
  catch (error) {
    console.log(error)
    return (false)
  }
}



 const postDatas = async (url, body) => {
  try {

    var response = await axios.post(`${ServerURL}/${url}`,
      //  {headers: {Authorization: `token ${JSON.parse(localStorage.getItem("tokenKey"))}` },
      // {  headers:{
      //   'Content-Type':'application/json'
      //  }},
      body)

      // console.log('tyyyy', response)
    var result = await response.data
    return (result)
  }
  catch (error) {
    console.log(error)

    return (false)
  }
}



export { ServerURL, postData, postDatas, getData, putData }