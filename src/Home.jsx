import Axios from 'axios'
import React, { useEffect, useState } from 'react';
import ak from './ahmed.jpg'
import { Link } from 'react-router-dom';



export default function Home() {

    let [trendingmovies,setTrendingmovies]=useState([])
    let [trendingpeople,setTrendingPeople]=useState([])   ;
    let [trendingtv,setTrendingTv]=useState([])

    async function bringData(mediatype,callback){
        let {data}= await Axios.get( `https://api.themoviedb.org/3/trending/${mediatype}/day?api_key=b43bf7c995b084ca8376b1468d55b515`)
       // console.log(data.results)
        callback(data.results.slice(0,10))
        
    }
    useEffect(()=>{
        bringData('movie',setTrendingmovies);
        bringData('person',setTrendingPeople);
        bringData('tv',setTrendingTv);
    },[])


    return ( <>
     <div className='my-5'> 
      <div className='container'>
        <div className='row'>
            <div className='col-md-4 d-flex align-items-center'>
                <div>
                <div className='brdr w-25 mb-4'> </div>
                <h3 className='text-muted '>Trending<br/> Movies<br/>To Watch Right Now</h3><br/>
                <p className='text-muted'>Top Treanding Movies By Day</p>
                <div className='brdr  mt-3'></div>
                </div>
            </div>
                {trendingmovies.map((mov,i)=>
                    <div key={i} className='col-md-2'>
                        <Link to={`/details/${mov.id}`}>
                        <img className='w-100' src={'https://image.tmdb.org/t/p/w500'+mov.poster_path} alt=""/>
                        <h6>{mov.title}</h6>
                        </Link>
                        
                       

                    </div>
                )}

         </div>

       </div>
    </div>


    <div className='my-5'> 
      <div className='container'>
        <div className='row'>
            <div className='col-md-4 d-flex align-items-center'>
                <div>
                <div className='brdr w-25 mb-4'> </div>
                <h3 className='text-muted '>Trending<br/> Tv<br/>To Watch Right Now</h3><br/>
                <p className='text-muted'>Top Treanding Tv By Day</p>
                <div className='brdr  mt-3'></div>
                </div>
            </div>
                {trendingtv.map((tv,i)=>
                    <div key={i} className='col-md-2'>
                        <img className='w-100' src={'https://image.tmdb.org/t/p/w500'+tv.poster_path} alt=""/>
                        <h6>{tv.name}</h6>
                       

                    </div>
                )}

         </div>

       </div>
    </div>

    
    <div className='my-5'> 
      <div className='container'>
        <div className='row'>
            <div className='col-md-4 d-flex align-items-center'>
                <div>
                <div className='brdr w-25 mb-4'> </div>
                <h3 className='text-muted '>Trending<br/> Persons<br/>To Watch Right Now</h3><br/>
                <p className='text-muted'>Top Treanding Tv By Day</p>
                <div className='brdr  mt-3'></div>
                </div>
            </div>
                {trendingpeople.map((people,i)=>
                    <div key={i} className='col-md-2'>
                        {people.profile_path===null?<img src={ak} alt="" className='w-100'/>:<img className='w-100' src={'https://image.tmdb.org/t/p/w500'+people.profile_path} alt=""/>
                        }
                        
                        <h6>{people.name}</h6>

                    </div>
                )}

         </div>

       </div>
    </div>
    </>)
   
    }