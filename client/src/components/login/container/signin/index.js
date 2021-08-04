import React,{useRef} from 'react'
import { SignInCard,
    CardTitle,
    CardEmail,
    CardPassword,
    CardButton,
    SignInForm,
    SignUpLink,
    CardSubtitle } from './styles/signin'
import { useDispatch } from 'react-redux'
import { showCard } from '../../../../features/counter/navigationSlice'
import axios from '../../../../axios/axios'

const SignIn = () => {

    const dispatch = useDispatch();
    const email = useRef(null);
    const password = useRef(null);

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
            })
            .catch(err=>{
                if(err.response.status === 401){
                    console.log(err.response.data.message);
                }else {
                    console.log("Server Error")
                }
                })


    }

    return (
        <SignInCard>
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
            
        </SignInCard>
    )
}

export default SignIn
