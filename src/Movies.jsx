import  Axios  from 'axios'
import React,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';

export default function Movies(num) {
    const [moviesdata, setMoviesdata] = useState([])
    const pagi=new Array(7).fill(1).map((x,index)=>index+1)
  
  
    async function Movie(num){
   
    let {data}=await Axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=b43bf7c995b084ca8376b1468d55b515&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${num}`)
   console.log(data.results)
   console.log(pagi)
   setMoviesdata(data.results)
}

useEffect(() => {
    Movie(1)

  return () => {
    
  }
}, [])

  return (
<>
{moviesdata?<div className='container'>
    <div className='row d-flex justify-content-center'>
{moviesdata.map((mov,i)=><div className='col-md-2' key={i}>
    <img className='w-100 py-2' src={'https://image.tmdb.org/t/p/w500'+mov.poster_path}alt=''/>
    <h5>{mov.title}</h5>
</div>)}
</div>
</div>:<div className='vh-100 d-flex align-items-center justify-content-center' >
    <i className='fas fa-spinner fa-spin fa-3x'></i>
        </div>}

    <div className='w-100 d-flex justify-content-center mt-5'>
    <nav aria-label="Page navigation example ">
     <ul className="pagination">
      {pagi.map((x)=>    <li onClick={()=>Movie(x)}  key={x} className="page-item"><a  className="page-link">{x}</a></li>
     )}
    
    
  </ul>
</nav>
    </div>
</>
  )
}
