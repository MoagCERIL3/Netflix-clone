import React,{useRef,useState} from 'react'
import { SignInCard,
    CardTitle,
    CardEmail,
    CardPassword,
    CardButton,
    SignInForm,
    SignUpLink,
    CardSubtitle, 
    ErrorCard,
    ErrorCardTitle,
    ErrorCardSpan,
    ErrorMessage
} from './styles/signin'
import { useDispatch } from 'react-redux'
import { showCard } from '../../../../features/counter/navigationSlice'
import axios from '../../../../axios/axios'
import { signin } from '../../../../features/counter/userSlice'
import {useHistory} from 'react-router-dom'
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
 

const SignIn = () => {

    const dispatch = useDispatch();
    const router = useHistory();
    const email = useRef(null);
    const password = useRef(null);
    const [error,setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const signup = (e) =>{
        e.preventDefault();
        dispatch(showCard(false));

    }

    const signInAction = (e)=>{
        e.preventDefault();

        const data = {
            email: email.current.value,
            password : password.current.value
        }
        console.log(data);
        axios.post('/signin',data)
            .then(response=>{
                console.log(response.data.user);
                dispatch(signin(response.data.user));
                router.push('/browse'); 
            })
            .catch(err=>{
                if(err.response.status === 401){
                    console.log(err.response.data.message);
                    setErrorMessage(err.response.data.message);
                    setError(true);
                }else {
                    console.log("Server Error");
                    setErrorMessage("Server Error");
                    setError(true);

                }
                })


    }

    let errorStyle = {border: "1px solid red"};

    return (
        
        <SignInCard>
            {!error ? (
                <SignInForm>
                    <CardTitle>Sign In</CardTitle>
                    <CardEmail ref={email} type="email" placeholder="Email"/>
                    <CardPassword ref={password} type="password" placeholder="Password"/>
                    <CardButton onClick={signInAction}>Sign In</CardButton>
                    <CardSubtitle>
                        New to Netflix ?
                        <SignUpLink href="/" onClick={signup}>Sign Up Now</SignUpLink>
                    </CardSubtitle>
                    
                </SignInForm>

            ) : (
                <ErrorCard>
                    <ErrorCardTitle>
                        <ErrorOutlineIcon style={{fontSize : 40}}/>
                        <ErrorCardSpan>Error</ErrorCardSpan>
                        <ErrorMessage>{errorMessage}</ErrorMessage>
                    </ErrorCardTitle>
                    <CardEmail ref={email} style={errorStyle} type="email" placeholder="Email"/>
                    <CardPassword ref={password} style={errorStyle} type="password" placeholder="Password"/>
                    <CardButton onClick={signInAction}>Sign In</CardButton>
                    <CardSubtitle>
                        New to Netflix ?
                        <SignUpLink href="/" onClick={signup}>Sign Up Now</SignUpLink>
                    </CardSubtitle>
                </ErrorCard>
            )}
            
            
        </SignInCard>
    )
}

export default SignIn
