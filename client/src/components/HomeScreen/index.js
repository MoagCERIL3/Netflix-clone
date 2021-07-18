import React from 'react'
import Header from './header'
import Banner from './banner'
import Row from './row'

const HomeScreen = () => {
    return (
        <div>
            <Header/>
            <Banner/>

            <Row title ="Trending Now" request="/trending/movie/week" isLarge={false}/>
            <Row title ="Top Rated" request="/movie/topRated/" isLarge={false}/>
            <Row title ="Action and Adventure" request="/movie/action" isLarge={false}/>
            <Row title ="Comedy" request="/movie/comedy" isLarge={false}/>
            <Row title ="Only on Netflix" request="/movie/netflixOriginals" isLarge={true}/>
            <Row title ="Drama" request="/movie/drama" isLarge={false}/>
            <Row title ="History" request="/movie/history" isLarge={false}/>
            <Row title ="Family" request="/movie/family" isLarge={false}/>
            <Row title ="Thriller" request="/movie/thriller" isLarge={false}/>


            
        </div>
    )
}

export default HomeScreen
