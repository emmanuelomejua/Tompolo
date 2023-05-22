import { useState } from 'react'
import './login.css'
import { useContext } from 'react'
import { AuthContext } from '../../context/authContext/AuthContext'

const Login = () => {

const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const {fetching, dispatch} = useContext(AuthContext)

const handleClick = async (e) => {
  e.preventDefault()
  
}

  return (
    <section className='login'>

      <form className="loginForm">
        <input 
        type="email" 
        placeholder='Email' 
        onChange={(e)=>setEmail(e.target.value)}  
        className="loginInput"
        />

        <input 
        type="password" 
        placeholder='Password' 
        onChange={(e)=>setPassword(e.target.value)}  
        className="loginInput"
        />

        <button className="loginBtn" onClick={handleClick}>Login</button>
      </form>
    </section>
  )
}

export default Login
