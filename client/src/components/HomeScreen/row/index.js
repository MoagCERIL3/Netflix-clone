import React,{useEffect, useState} from 'react'
import { SingleRow,
     Title,
     Poster,
     Image,
     RowPosters,
     LargePoster, 
     ModalWrapper,
     ModalTitle
} from './styles/row'
import { Popover } from '@material-ui/core';
import axios from '../../../axios/axios'

const Row = (props) => {

    const [movies,setMovies] = useState([]);
    const base_url ="https://image.tmdb.org/t/p/original/";
    const [anchorEl, setAnchorEl] = React.useState(null);

    useEffect(() => {
        axios.get('/browse'+props.request)
            .then(res=>setMovies(res.data.results))
        return () => {
            
        }
    }, [props.request])

    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };
    
    const open = Boolean(anchorEl);

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
                            
                            
                                <Image src={`${base_url}${movie.backdrop_path}`}/>
                               
                        )
                    }
                })}
            </RowPosters>
       
        </SingleRow>
    )
}

export default Row
