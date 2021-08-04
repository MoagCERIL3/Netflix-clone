import React from 'react'
import { 
    HeaderContent,
    Navbar,
    NavbarLogo,
    NavbarUserName
 } from './styles/header'

 
const Header = () => {
    return (
        <HeaderContent>
            <Navbar>
                <NavbarLogo src="https://logos-marques.com/wp-content/uploads/2021/03/Netflix-logo.png" alt=""/>
                <NavbarUserName>Hi user</NavbarUserName>
               
            </Navbar>
        </HeaderContent>
    )
}

export default Header
