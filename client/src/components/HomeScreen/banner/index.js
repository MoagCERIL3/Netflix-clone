import React ,{ useState, useEffect} from 'react'
import { Header,
    Title,
    Buttons,
    SubTitle,
    PlayButton,
    Fade,
    AddToListButton,
    DetailsButton,
    Container
} from './styles/banner'
import { Paper } from '@material-ui/core';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import axios from '../../../axios/axios'


const Banner = () => {

    const[topMovie,setTopMovie]= useState({});
  

    
    useEffect(() => {
        
        axios.get('/browse/top')
            .then(res=>setTopMovie(res.data.results[Math.floor(Math.random()* res.data.results.length-1)]))


        return () => {
            
        }
    }, [])

   
    const truncate = (text) =>{
        return text?.length > 150 ? text.substr(0, 149) + "..." : text
    }


    
    
    const getGenres = () =>{

       
        return topMovie?.genre_ids?.map(genre=> {
                    let genreName;
                    axios.get('/browse/movie/genre',{ params: { id : genre }})
                    .then(res=> {
                        genreName = res.data.name;
                        });
                    console.log(genreName);
                    return(
                        <Paper key={genre} elevation={3}> {genreName} </Paper>
                    )
                }) 
        
    }

    console.log(topMovie?.genre_ids);

    return (
        <Header backgroundImage={"https://image.tmdb.org/t/p/original/"+topMovie?.backdrop_path}>
            <Container>
                <Title>{topMovie?.title || topMovie?.name || topMovie?.original_name}</Title>
                <div>
                    <Paper elevation={3}>RATING  {topMovie?.vote_average} </Paper>
                    <Paper elevation={3}> {topMovie?.release_date?.slice(0,4)} </Paper>
                </div>
                <SubTitle>
                    {truncate(topMovie?.overview)}
                </SubTitle>
                <Buttons>
                    <PlayButton><PlayArrowIcon/> Play</PlayButton>
                    <DetailsButton>More details</DetailsButton>
                    <AddToListButton><AddCircleOutlineIcon/> Add to list</AddToListButton>
                </Buttons>
            </Container>

            <Fade/>
            
        </Header>
    )
}

export default Banner
