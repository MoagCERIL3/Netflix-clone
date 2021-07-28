import React,{useRef} from 'react'
import { Background, Gradient,Card,CardTitle,CardSubtitle,CardInput,CardForm,FormInput,FormButton, FormLink} from './styles/container'
import SignIn from './signin/index';
import {useDispatch, useSelector} from 'react-redux'
import { initialSignup } from '../../../features/counter/userSlice';
import { selectshowSignInCard } from '../../../features/counter/navigationSlice';

const Container = () => {

    const showCard = useSelector(selectshowSignInCard);
    const email = useRef(null);
    const dispatch = useDispatch();

    const btnOnClick = (e) => {

        dispatch(initialSignup({
            email: email 
        }));

    }
            
    return (
        <Background>
            <Gradient/>
            {!showCard ? (
                <Card>
                    <CardTitle>Unlimited movies and TV shows</CardTitle>
                    <CardSubtitle>Watch anywhere and Cancel anytime !</CardSubtitle>
                    <CardInput>
                        <CardForm>
                            <FormInput ref={email} type="email" placeholder="Type your email right here"/>
                            <FormLink href="/signup"><FormButton onClick={btnOnClick}>Get Started</FormButton></FormLink>
                        </CardForm>
                    </CardInput>
                </Card>
            ) : (<SignIn/>)}
            
        </Background>
    )
}

export default Container
