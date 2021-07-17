import styled from 'styled-components'

export const HeaderContent = styled.div`
    position : fixed;
    top : 0;
    width : 100%;
    height: 60px;
    

    transition-timing-function : ease-in;
    transition : all 0.5s;

    background-color: ${props => props.background === true ? 'rgb(20, 20, 20)': '' };
   
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

export const NavbarAvatar = styled.img`
    position:fixed;
    top : 20px;
    right: 50px;
    width : 30px;
    height : 30px;
    cursor : pointer;

`;

export const SearchIconButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: 0;
  position:fixed;
  top : 10px;
  right: 120px;    
  height: 32px;
  width: 32px;
  padding: 10px;
  display: flex;
  line-height: 1;
  color: #fff;
  text-shadow: 0 1px 1px rgb(0 0 0 / 30%);
  
`;