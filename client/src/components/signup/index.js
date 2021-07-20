import React from 'react'
import Header from './header/index'
import MailIcon from '@material-ui/icons/Mail';
import LockIcon from '@material-ui/icons/Lock';
import { Container, ContainerHeader, FormContainer, PasswordContainer, NextButtonContainer, StepTitle, Subtitle, EmailContainer, EmailSpan, PasswordInput, NextButton } from './styles/signup'

const SignUp = () => {
    return (
        <div>
            <Header/>
            <Container>
                <FormContainer>
                    <ContainerHeader>
                        <StepTitle>Welcome back! <br></br>Joining Netflix is easy.</StepTitle>
                    </ContainerHeader>
                    <Subtitle>Enter your password and you'll be watching in no time.</Subtitle>
                    <EmailContainer>
                         <MailIcon/>
                        <EmailSpan>test@gmail.com</EmailSpan>
                    </EmailContainer>
                    <PasswordContainer>
                        <LockIcon/>
                        <PasswordInput type="password" placeholder="Enter your password"/>
                    </PasswordContainer>
                   
                    <NextButtonContainer>
                        <NextButton>Next</NextButton>
                    </NextButtonContainer>
                    
                </FormContainer>
                
            </Container>
        </div>
        
    )
}

export default SignUp
