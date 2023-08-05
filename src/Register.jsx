import Axios  from 'axios';
import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

export default function Register() {
let navigate=useNavigate()
    const [user, setUser] = useState({
                     name:'',
                     email:'',
                    password:'',
                    confirmpassword:''
    });
   const [error, setError] = useState(null)
    function userdata(e){
        let newuser={...user}
        newuser[e.target.name]=e.target.value;
        setUser(newuser)
        console.log(newuser)
    }
    async function senddata(e){
        e.preventDefault()
        let {data}=await Axios.post('http://localhost:5000/users/register',user)
        console.log(data)
        if (data.message==='success'){
         navigate('/login')
        }
        else{
            navigate('/register')
         setError(data)
        }
    }

    useEffect(() => {
        
    
      return () => {
        
      }
    }, [])
    


  return (
    <>
   
    <div className='container'>
    <div className='mx-auto w-75'>{error?<div className='alert alert-danger'>{error.message}</div>:null}</div>
    <form onSubmit={senddata}>
    <div className="mb-3">
    <label className="form-label">UserName</label>
    <input onChange={userdata} type="text" name='name' className="form-control" id="exampleInputPassword1"/>
  
   </div>
   <div className="mb-3">
    <label  className="form-label">Email address</label>
    <input  onChange={userdata} type="email"name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>
    <div className="mb-3">
    <label  className="form-label">Password</label>
    <input onChange={userdata} type="password"name='password' className="form-control" id="exampleInputPassword1"/>
  </div>
 
  <div className="mb-3">
    <label  className="form-label">Confirm Password</label>
    <input onChange={userdata} type="password"name='confirmpassword' className="form-control" id="exampleInputPassword1"/>
  </div>
 
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
</div>
    </>
  )
}
