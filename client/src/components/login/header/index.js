import React from 'react'
import {useDispatch} from 'react-redux'
import { showCard } from '../../../features/counter/navigationSlice'
import { HeaderContainer,HeaderLogo,HeaderButton} from './styles/header'

const Header = () => {

    const dispatch = useDispatch();

    const btnOnClick = (e) => {

        dispatch(showCard(true));

    }


    return (
        <HeaderContainer>
            <HeaderLogo src="https://logos-marques.com/wp-content/uploads/2021/03/Netflix-logo.png" alt=""/>
            <HeaderButton onClick={btnOnClick}>Sign In</HeaderButton>
        </HeaderContainer>
    )
}

export default Header
