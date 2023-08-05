import './App.css';
import Home from './Home';
import Movies from './Movies';
import People from './People';
import Tv from './Tv';
import {Routes,Route} from'react-router-dom'
import Navbar from './Navbar';
import MovieDetails from './MovieDetails';
import Register from './Register';
import { Login } from './Login';
import { useNavigate ,Navigate} from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import React,{useState,useEffect} from 'react'


 function App(props) {
   let navigate=useNavigate()
   const [userData, setUserData] = useState(null)

   
   function getUserData(){
     let x= localStorage.getItem('userToken');
     let decodetoken=jwtDecode(x);
     setUserData(decodetoken)
     console.log(decodetoken)
    
   }
   function ProtectedRoute(props){
      let x= localStorage.getItem('userToken');
      if (x===null){
         return <Navigate to='/login'/>
              }
      else{
         return props.children 
   }
}
    return (
 <> 
 <Navbar/>
    <Routes>
        <Route path='/' element={<ProtectedRoute><Home/></ProtectedRoute>} />
        <Route path='/home' element={<ProtectedRoute><Home/></ProtectedRoute>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login getUserData={getUserData} />} />
        <Route path='/movies' element={<ProtectedRoute><Movies/></ProtectedRoute>} />
        <Route path='/people' element={<ProtectedRoute><People/></ProtectedRoute>} />
        <Route path='/tv' element={<ProtectedRoute><Tv/></ProtectedRoute>} />
        <Route path='/details' element={<ProtectedRoute><MovieDetails/></ProtectedRoute>} >
          <Route path=':id' element={<ProtectedRoute><MovieDetails/></ProtectedRoute>} />
        </Route>
    
    </Routes>
 </>

    )


}

export default App;