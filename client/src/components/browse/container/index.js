import React from 'react'
import { ProfilesContainer,
    CenteredDiv,
    Title,
    ProfilesList,
    ProfileItem,
    ProfileAvatar,
    ProfileName,
    Content,
    ProfileItemLink
     } 
from './styles/container'

const Container = () => {
    return (
        <ProfilesContainer>
            <CenteredDiv>
                <Content>
                    <Title>Please select one of these profiles</Title>
                    <ProfilesList>
                        <ProfileItem>
                            <div>
                                <ProfileItemLink>
                                    <ProfileAvatar src="/images/usersAvatars/1.png"/>
                                    <ProfileName>profile 1</ProfileName>
                                </ProfileItemLink>
                            </div>
                        </ProfileItem>
                        <ProfileItem>
                            <div>
                                <ProfileItemLink>
                                    <ProfileAvatar src="/images/usersAvatars/2.png"/>
                                    <ProfileName>profile 2</ProfileName>
                                </ProfileItemLink>
                            </div>
                        </ProfileItem>
                        <ProfileItem>
                            <div>
                                <ProfileItemLink>
                                    <ProfileAvatar src="/images/usersAvatars/3.png"/>
                                    <ProfileName>profile 3</ProfileName>
                                </ProfileItemLink>
                            </div>
                        </ProfileItem>
                        <ProfileItem>
                            <div>
                                <ProfileItemLink>
                                    <ProfileAvatar src="/images/usersAvatars/4.png"/>
                                    <ProfileName>profile 4</ProfileName>
                                </ProfileItemLink>
                            </div>
                        </ProfileItem>
                    </ProfilesList>
                </Content>
                
            </CenteredDiv>
        </ProfilesContainer>
    )
}

export default Container
