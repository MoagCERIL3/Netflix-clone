import React from 'react'
import { Background, Gradient,Card,CardTitle,CardSubtitle,CardInput,CardForm,FormInput,FormButton} from './styles/container'

const Container = () => {
    return (
        <Background>
            <Gradient/>
            <Card>
                <CardTitle>Unlimited movies and TV shows</CardTitle>
                <CardSubtitle>Watch anywhere and Cancel anytime</CardSubtitle>
                <CardInput>
                    <CardForm>
                        <FormInput type="email" placeholder="Type your email right here"/>
                        <FormButton type="submit">Get Started</FormButton>
                    </CardForm>
                </CardInput>
            </Card>
        </Background>
    )
}

export default Container
