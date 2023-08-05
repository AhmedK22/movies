import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import  Axios  from 'axios'

export default function MovieDetails() {
    let para=useParams()
    const [details, setDetails] = useState([])

    async function detail(myid){
        let {data}= await Axios.get(`https://api.themoviedb.org/3/movie/${myid}?api_key=b43bf7c995b084ca8376b1468d55b515&language=en-US`)
        console.log(data)
        setDetails(data)
    }
    useEffect(() => {
        detail(para.id)
    
      return () => {
        
      }
    }, [])
    
  return (
    <>
    {details? <div className='container'>
    <div className='row'>
    <div className='col-md-7'>
        <img src={`https://image.tmdb.org/t/p/w500`+details.poster_path}alt='' className='w-100 h-50'/>
       <h4>{details.title}</h4>
       <br/>
       {details.overview}<br/>
       
    </div>
    </div>
   </div>: <div className='vh-100 d-flex align-items-center justify-content-center' >
    <i className='fas fa-spinner fa-spin fa-3x'></i>
        </div>}
  
   
    </>
  )
}
