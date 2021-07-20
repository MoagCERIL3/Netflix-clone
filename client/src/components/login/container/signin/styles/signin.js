import styled from "styled-components";

export const SignInCard = styled.div`

    top : 20%;
    position: absolute;
    z-index : 1;
    max-width: 300px;
    padding: 70px;
    background : rgba(0, 0, 0, 0.75); 
    border-radius: 4px;
    margin: 0 auto ;
    left : 0;
    right: 0;
    
    

`;

export const SignInForm = styled.form`
    display: grid;
    flex-direction: column;
`;

export const CardTitle = styled.h1`
    color: #fff;
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 28px;
`;

export const CardEmail = styled.input`
    border-radius : 30px;
    border: none;
    outline-width: 0;
    color: #fff;
    height: 20px;
    line-height: 100%;
    padding: 10px 20px ;
    margin-bottom: 10px;
    background : rgba(0, 0, 0, 0.55); 


    &:focus {
        background : rgba(51, 51, 51)
    }
`;
export const CardPassword = styled.input`
    border-radius : 30px;
    border: none;
    outline-width: 0;
    color: #fff;
    height: 20px;
    line-height: 100%;
    padding: 10px 20px ;
    margin-bottom: 10px;
    background : rgba(0, 0, 0, 0.55); 
    

    &:focus {
        background : rgba(51, 51, 51)
    }

`;
export const CardButton = styled.button`
    border: none;
    cursor: pointer;
    margin-top: 10px;
    color: white;
    background-color: #e50914;
    font-weight: 700;
    border-radius: 30px;
    font-size: 1rem;
    padding: 16px 20px;
`;

export const CardSubtitle = styled.h4`
    color: #737373;
    font-size: 16px;
    font-weight: 500;
    margin-top: 16px;
    text-align : left;
`;

export const SignUpLink = styled.a`
    text-decoration: none;
    color : white;
    margin-left: 5px;
    cursor: pointer;

    &:hover{
        text-decoration: underline;
    }
`;
