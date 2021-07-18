import React,{useEffect, useState} from 'react'
import { SingleRow, Title,Poster,RowPosters, LargePoster } from './styles/row'
import axios from '../../../axios/axios'

const Row = (props) => {

    const [movies,setMovies] = useState([]);
    const base_url ="https://image.tmdb.org/t/p/original/";

    
    useEffect(() => {
        axios.get('/browse'+props.request)
            .then(res=>setMovies(res.data.results))
        return () => {
            
        }
    }, [props.request])

    console.log(movies);
    return (
        <SingleRow>
            <Title>{props.title}</Title>
            <RowPosters>
                {movies.map(movie=>{
                if(props.isLarge){
                    return(
                        <LargePoster key={movie.id} src={`${base_url}${movie.poster_path}`} ></LargePoster>)
                }else{
                    return(
                        <Poster key={movie.id} src={`${base_url}${movie.backdrop_path}`} ></Poster>)
                }
            })}
            </RowPosters>
       
        </SingleRow>
    )
}

export default Row
