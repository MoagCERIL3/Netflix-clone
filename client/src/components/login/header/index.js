import React from 'react'
import { HeaderContainer,HeaderLogo,HeaderButton} from './styles/header'

const Header = () => {
    return (
        <HeaderContainer>
            <HeaderLogo src="https://logos-marques.com/wp-content/uploads/2021/03/Netflix-logo.png" alt=""/>
            <HeaderButton>Sign In</HeaderButton>
        </HeaderContainer>
    )
}

export default Header
