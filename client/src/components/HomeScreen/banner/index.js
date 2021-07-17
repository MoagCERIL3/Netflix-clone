import React ,{ useState, useEffect} from 'react'
import { Header, Title, Buttons, SubTitle, PlayButton, Fade, AddToListButton,Container } from './styles/banner'
import axios from '../../../axios/axios'
const Banner = () => {

    const[topMovie,setTopMovie]= useState([]);

    useEffect(() => {
        
        axios.get('/browse/top')
        .then(res=>setTopMovie(res.data.results[Math.floor(Math.random()* res.data.results.length-1)]))


        return () => {
            
        }
    }, [])


    const truncate = (text) =>{
        return text?.length > 150 ? text.substr(0, 149) + "..." : text
    }
    return (
        <Header backgroundImage={"https://image.tmdb.org/t/p/original/"+topMovie?.backdrop_path}>
            <Container>
                <Title>{topMovie?.title || topMovie?.name || topMovie?.original_name}</Title>
                <SubTitle>{truncate(topMovie?.overview)}
              
                </SubTitle>
                <Buttons>
                    <PlayButton>Play</PlayButton>
                    <AddToListButton>Add to list</AddToListButton>
                </Buttons>
                 </Container>

            <Fade/>
            
        </Header>
    )
}

export default Banner
