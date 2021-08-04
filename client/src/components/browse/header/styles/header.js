import styled from "styled-components";

export const HeaderContent = styled.div`
    position : fixed;
    top : 0;
    width : 100%;
    height: 60px;
    background-color : transparent;
   
`;

export const Navbar = styled.div`
    display : flex;
    justify-content : space-between;
`;

export const NavbarLogo = styled.img`
    position:fixed;
    top : 10px;
    left : 50px;
    width: 90px;
    cursor : pointer;
    `;


export const NavbarUserName = styled.span`
    position:fixed;
    top : 15px;
    right: 50px;
    color: #fff;
    font-size: 1.5vw;
`;