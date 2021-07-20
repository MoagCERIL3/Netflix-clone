import styled from "styled-components";

export const Container = styled.div`
    position : fixed;
    top: 100px;
    left : 0;
    display : flex;
    justify-content : center;
    padding: 20px 30px;
    width: 100%;
    height: 500px;

`;
export const ContainerHeader = styled.div`
    margin-bottom : 10px;
`;
export const FormContainer = styled.form`
    margin : 0 auto;
    text-align: left;
    max-width: 440px;
   
`;
export const StepTitle = styled.h1`
    
    color : #333;
    font-size: 32px;
    font-weight: 600;
    display: inline-block;
    
`;
export const Subtitle = styled.h3`

    margin-top: 10px;
    font-size : 18px; 
    font-weight: 500;
    color : #333333;

`;
export const EmailContainer = styled.div`
    display : flex;
    margin-top : 20px;
    border-radius : 30px;
    color : #333;
    height: 40px;
    width:90%;
    line-height: 100%;
    padding: 10px 20px ;
    margin-bottom: 10px;
    background-color : #EEEEEE; 


    &:focus {
        
    }

    .MuiSvgIcon-root {
        padding: 4px 10px;
    }
`;

export const PasswordContainer = styled.div`
    display : flex;
    margin-top : 20px;
    border-radius : 30px;
    color : #333;
    height: 40px;
    width:90%;
    line-height: 100%;
    padding: 10px 20px ;
    margin-bottom: 10px;
    background-color : #EEEEEE; 


    &:focus {
        
    }

    .MuiSvgIcon-root {
        padding: 4px 10px;
    }
`;


export const EmailSpan =styled.span`
    font-size : 18px; 
    font-weight: 500;
    color : #333333;
    padding-top: 8px;
    

`;
export const PasswordInput = styled.input`
    padding-top: 8px;
    font-size : 18px; 
    font-weight: 500;
    border: none;
    outline-width: 0;
    color : #333;
    height: 20px;
    width: 70%;
    line-height: 100%;
    background-color : #EEEEEE; 


    &:focus {
        
    }

`;
export const NextButtonContainer = styled.div`
    text-align: right;
`;
export const NextButton = styled.button`
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


