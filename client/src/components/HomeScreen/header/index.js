import React,{useState, useEffect} from 'react'
import { HeaderContent, Navbar, NavbarLogo, NavbarAvatar,SearchIconButton } from './styles/navbar'
import SearchIcon from '@material-ui/icons/Search';
const Header = () => {

    const [show, handleShow] = useState(false);

    const transitionNavBar = () =>{

        if(window.scrollY > 100){
            handleShow(true);
        }else {
            handleShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', transitionNavBar);
        return () => {
            window.removeEventListener('scroll', transitionNavBar);
        }
    }, [])

    return (
        <HeaderContent background={show}>
            <Navbar>
                <NavbarLogo src="https://logos-marques.com/wp-content/uploads/2021/03/Netflix-logo.png" alt=""/>
                <SearchIconButton>
                    <SearchIcon fontSize="large"/>
                </SearchIconButton>
                <NavbarAvatar src="/images/usersAvatars/1.png" alt=""/>
            </Navbar>
        </HeaderContent>
            
            
        
    )
}

export default Header