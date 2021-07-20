import React from 'react'
import { SignInCard, CardTitle, CardEmail, CardPassword,CardButton,SignInForm,SignUpLink,CardSubtitle } from './styles/signin'

const SignIn = () => {
    return (
        <SignInCard>
            <SignInForm>
                <CardTitle>Sign In</CardTitle>
                <CardEmail type="email" placeholder="Email"/>
                <CardPassword type="password" placeholder="Password"/>
                <CardButton>Sign In</CardButton>
                <CardSubtitle>
                    New to Netflix ?
                    <SignUpLink href="/signup" >Sign Up Now</SignUpLink>
                </CardSubtitle>
                
            </SignInForm>
            
        </SignInCard>
    )
}

export default SignIn
