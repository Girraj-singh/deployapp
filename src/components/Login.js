import React from 'react'
import { postData } from '../services/FetchNodeServices'


const Login = () => {
    const handleSubmit=async(e)=>{
        e.preventDefault()
        const data={
            userId:e.target.userId.value,
            password:e.target.password.value
        }
        const result=await postData("login",data)
        if(result){
            localStorage.setItem("tokenKey",JSON.stringify(result.token))
            console.log(result)
        }
        
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor='userId'>user Id</label>
            <input name='userId' type="text"></input>
            <label htmlFor='password'>password</label>
            <input name='password' type="password"></input>
            <button type='submit'>Login</button>
        </form>
    </div>
  )
}

export default Login