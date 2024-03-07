import { useState } from "react";
import axios from 'axios';
import {toast} from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
import './../styles/Register.css'; // Adjust the path as needed


export default function Register() {
  const navigate = useNavigate()
  const [data, setData] = useState({
    name:'',
    email: '',
    password: '',
  })

  const registerUser = async (e) => {
    e.preventDefault()
    const {name, email, password} = data
    try {
      const {data} = await axios.post('/register', {
        name, email, password
      })
      if(data.error) {
        toast.error(data.error)
      } else {
        setData({})
        toast.success('Login Successful. Welcome!')
        navigate('/login')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="container">
      <div className="split right img">
        <img src="https://cdn.discordapp.com/attachments/1019439013972680734/1213674741479505951/login.png?ex=65f655af&is=65e3e0af&hm=7a988a8f3355ccac1fe35385cba69ee41de670a3d23ab5fed6cd4fea31d475df&" alt="op" />
      </div>
      <div className="split left">
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} className = "centered">
      <h1 style={{paddingBottom: '50px'}}>Welcome</h1>
      <form  onSubmit={registerUser}>
        <div className="text_word">
          <input className="text_word_input" type="text" placeholder="Enter Name" value={data.name} onChange={(e) => setData({...data, name:e.target.value})} style={{ padding: '5px', borderRadius: '50px', border: '1px solid #ccc', 'width': '546px', 'height': '66px'}}/>
        </div>
        <div className="text_word">
          <input className="text_word_input" type="email" placeholder="Enter Email" value={data.email} onChange={(e) => setData({...data, email:e.target.value})} style={{ padding: '5px', borderRadius: '50px', border: '1px solid #ccc', 'width': '546px', 'height': '66px'}}/>
        </div>
        <div className="text_word">
          <input className="text_word_input" type='password' placeholder='Enter Password' value={data.password} onChange={(e) => setData({...data, password: e.target.value})} style={{ padding: '5px', borderRadius: '50px', border: '1px solid #ccc', 'width': '546px', 'height': '66px'}} />
        </div>
        <div className="text_word">
        <button type = 'submit'style={{padding: '5px 10px', borderRadius: '50px', border: 'none', backgroundColor: 'rgba(71, 40, 54, 1)', color: '#fff', cursor: 'pointer', 'width': '223px', 'height': '66px', }}>Create Account</button>
        </div>
      </form>
      </div>
      </div>
    </div>
  )
}