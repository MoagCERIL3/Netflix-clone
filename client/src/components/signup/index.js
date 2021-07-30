import React,{useRef, useState} from 'react'
import Header from './header/index'
import MailIcon from '@material-ui/icons/Mail';
import LockIcon from '@material-ui/icons/Lock';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import { Container,
    ContainerHeader,
    ContainerSuccessHeader,
    ContainerErrorHeader,
    ErrorMessage,
    ErrorSpan,
    SuccessTitle,
    SuccessSpan,
    ErrorTitle,
    FormContainer,
    PasswordContainer,
    NextButtonContainer,
    StepTitle,
    Subtitle,
    EmailContainer,
    EmailSpan,
    PasswordInput,
    NextButton,
    LoginLink } from './styles/signup'
import axios from '../../axios/axios' 
import { showCard } from '../../features/counter/navigationSlice';
import {useDispatch} from 'react-redux'


const SignUp = () => {

    const persistedUser =  JSON.parse(window.localStorage.getItem("state"));
    const password = useRef("");
    
    const[idle,setIdle] = useState(true);
    const[failed,setFailed] = useState(false);
    const[success,setSuccess] = useState(false);
    const[errorMessage,setErrorMessage] = useState("");
    const[emailError,setEmailError] = useState(false);
    const[PasswordError,setPasswordError] = useState(false);

    const dispatch = useDispatch();
    
    const submit =(e)=>{
        e.preventDefault();

        const data = {
            email : persistedUser.user.newUser.email,
            password : password?.current.value
        }
        axios.post('/signup',data)
            .then(res => {
                console.log(res);
                setIdle(false);
                setSuccess(true);
            })
            .catch(err=>{
                setIdle(false);
                setFailed(true);
                if(err.response.status === 404){
                    err.response.data.errors.forEach(err => {
                        console.log(err);
                        if(err.password) {
                            setErrorMessage(err.password);
                            setPasswordError(true);
                               
                            
                        }else if(err.email){
                            setErrorMessage(err.email);
                            setEmailError(true);
                        }
                        
                    });
                   
                }else if (err.response.status === 400){
                    err.response.data.errors.map(err=>setErrorMessage(err.message));
                   
                }

            })

    }

    const login =(e)=>{
        e.preventDefault();
        dispatch(showCard(true));
        window.location.href='/';
    }

    let formContainer;
    
    if(idle){
        formContainer =  <FormContainer>
                            <ContainerHeader>
                                <StepTitle>Welcome back! <br></br>Joining Netflix is easy.</StepTitle>
                                <Subtitle>Enter your password and you'll be watching in no time.</Subtitle>
                            </ContainerHeader>
                            <EmailContainer>
                                <MailIcon/>
                                <EmailSpan>{persistedUser.user.newUser.email}</EmailSpan>
                            </EmailContainer>
                            <PasswordContainer>
                                <LockIcon/>
                                <PasswordInput ref={password} type="password" placeholder="Enter your password"  autocomplete="new-password"/>
                            </PasswordContainer>
                            
                            <NextButtonContainer>
                                <NextButton onClick={submit}>Sign up</NextButton>
                            </NextButtonContainer>
                        </FormContainer>

                        ;
    }  
                                    
    if(failed){
        let emailStyle,passwordStyle;
        if(emailError) emailStyle = {border: "1px solid red"};
        if(PasswordError) passwordStyle = {border: "1px solid red"};

        formContainer = <FormContainer>
                            <ContainerErrorHeader>
                                <ErrorTitle>
                                     <ErrorOutlineIcon style={{ fontSize: 60 }}/>
                                     <ErrorSpan> We have a little probleme.</ErrorSpan>
                                </ErrorTitle>
                                <ErrorMessage>{errorMessage}</ErrorMessage>
                            </ContainerErrorHeader>
                            <EmailContainer style={emailStyle}>
                                <MailIcon/>
                                <EmailSpan >{persistedUser.user.newUser.email}</EmailSpan>
                            </EmailContainer>
                            <PasswordContainer style={passwordStyle}>
                                <LockIcon/>
                                <PasswordInput  ref={password} type="password" placeholder="Enter your password"  autocomplete="new-password"/>
                            </PasswordContainer>
                            
                            <NextButtonContainer>
                                <NextButton onClick={submit}>Sign up</NextButton>
                            </NextButtonContainer>
                        </FormContainer>;
                            
    }else if (success){
        formContainer = <ContainerSuccessHeader>
                                                    
                            <SuccessTitle>
                                <CheckCircleOutlineIcon style={{ fontSize: 80 }}/>
                                <SuccessSpan> Done ! .</SuccessSpan>
                            </SuccessTitle>
                            <NextButtonContainer>
                                <LoginLink href="/">
                                    <NextButton onClick={login}>Login</NextButton>
                                </LoginLink>
                                   
                            </NextButtonContainer>
                        
                        </ContainerSuccessHeader>;
    }
    return (
        <div>
            <Header/>
            <Container>
               {formContainer}
                
            </Container>
        </div>
        
    )
}

export default SignUp
