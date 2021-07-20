import React,{useState}from 'react'
import { Background, Gradient,Card,CardTitle,CardSubtitle,CardInput,CardForm,FormInput,FormButton} from './styles/container'
import SignIn from './signin/index';

const Container = () => {
    const[showSignInCard,setCard]= useState(false);

    return (
        <Background>
            <Gradient/>
            {showSignInCard ? (
                <Card>
                    <CardTitle>Unlimited movies and TV shows</CardTitle>
                    <CardSubtitle>Watch anywhere and Cancel anytime</CardSubtitle>
                    <CardInput>
                        <CardForm>
                            <FormInput type="email" placeholder="Type your email right here"/>
                            <FormButton type="submit" onClick={(e)=> setCard(true)}>Get Started</FormButton>
                        </CardForm>
                    </CardInput>
                </Card>
            ) : (<SignIn/>)}
            
        </Background>
    )
}

export default Container
