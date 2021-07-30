import React from 'react'
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


const SignIn = () => {

    const dispatch = useDispatch();

    const signup = (e) =>{
        e.preventDefault();
        dispatch(showCard(false));

    }

    return (
        <SignInCard>
            <SignInForm>
                <CardTitle>Sign In</CardTitle>
                <CardEmail type="email" placeholder="Email"/>
                <CardPassword type="password" placeholder="Password"/>
                <CardButton>Sign In</CardButton>
                <CardSubtitle>
                    New to Netflix ?
                    <SignUpLink href="/" onClick={signup}>Sign Up Now</SignUpLink>
                </CardSubtitle>
                
            </SignInForm>
            
        </SignInCard>
    )
}

export default SignIn
