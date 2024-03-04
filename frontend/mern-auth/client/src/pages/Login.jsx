import { useState } from "react";
import axios from 'axios'
import {toast} from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
import './../styles/Login.css'

export default function Login() {
  const navigate = useNavigate()
  const [data, setData] = useState({
    email: '',
    password: '',
  })

const loginUser = async (e) => {
  e.preventDefault()
   const {email, password} = data 
   try {
    const {data} = await axios.post('/login', {
      email,
      password
    });
    if(data.error) {
      toast.error(data.error)
    } else {
      setData({});
      navigate('/dashboard')
    }
   } catch (error) {

   }
}

  return (
    <div className="container">
      <div className="split left img">
        <img src="https://cdn.discordapp.com/attachments/1019439013972680734/1213674741479505951/login.png?ex=65f655af&is=65e3e0af&hm=7a988a8f3355ccac1fe35385cba69ee41de670a3d23ab5fed6cd4fea31d475df&" alt="op" />
      </div>
      <div className="split right">
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} className = "centered">
      <h1 style={{paddingBottom: '50px'}}>Welcome</h1>
      <form  className = "firstForm" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', padding: '20px', borderRadius: '10px', }} onSubmit={loginUser}>
      <div className="text_word">
        <input type='email' placeholder='Enter Email...' value={data.email} onChange={(e) => setData({...data, email: e.target.value})} style={{ padding: '5px', borderRadius: '50px', border: '1px solid #ccc', 'width': '546px', 'height': '66px'}}/>
        </div>
        <div className="text_word">
        <input type='password' placeholder='Enter Password...' value={data.password} onChange={(e) => setData({...data, password: e.target.value})} style={{ padding: '5px', borderRadius: '50px', border: '1px solid #ccc', 'width': '546px', 'height': '66px'}}/>
        </div>
        <div className="text_word">
        <button type = 'submit'style={{padding: '5px 10px', borderRadius: '50px', border: 'none', backgroundColor: 'rgba(71, 40, 54, 1)', color: '#fff', cursor: 'pointer', 'width': '223px', 'height': '66px'}}>Login</button>
        </div>
      </form>
      </div>
      </div>
    </div>
  )
}
