import React, { useEffect,useState } from 'react'
import './RowPost.css'
import axios from '../../axios'
import {imageUrl,API_KEY} from '../../Constants/constants'
import Youtube from 'react-youtube'

const RowPost = (props) => {
    const [movies,setMovies]= useState([])  
    const [urlId,seturlId]=useState('')
    useEffect(()=>{
        axios.get(props.url).then(response=>
        {
            console.log(response.data.results[0]) 
            setMovies(response.data.results)
        }).catch(err=>{
            //alert('Network error')
        })
    },[])

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
      const handleMovie = (id)=>{
        console.log(id);
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
            console.log(response.data);
            if(response.data.results.length!=0)
            {
                seturlId(response.data.results[0])
            }else{
                console.log('Not Available');
            }
            
        })

      }
  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>

      {movies.map((movie)=>
         <img onClick={()=>handleMovie(movie.id)} className={props.isSmall ? 'smallPoster': 'poster'} src={`${imageUrl+movie.backdrop_path}`}alt='poster'/>
      
)}
     
      
       
      </div>
     { urlId &&  <Youtube opts={opts}  videoId={urlId.key} />}
    </div>
  )
}

export default RowPost
