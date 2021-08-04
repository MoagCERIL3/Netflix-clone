import styled from "styled-components";

export const ProfilesContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display : flex;
    justify-content: center;
    text-align: center;
    background: #141414;
    z-index: -1;

`;

export const CenteredDiv = styled.div`
    z-index: 100;
    position: absolute;
    top: 120px;
    left: 0;
    right: 0;
    display : flex;
    justify-content: center;
    text-align: center;
    

`;

export const Title = styled.h1`
    color : white;
    width: 100%;
    margin: .67em 0;
`;

export const ProfileAvatar = styled.img`

    height: 10vw;
    width: 10vw;
    max-height: 200px;
    max-width: 200px;
    min-height: 84px;
    min-width: 84px;
    box-sizing: border-box;
    position: relative;
    text-decoration: none;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #333;
    border-radius: 4px;
    border: none;


`;

export const ProfileName = styled.span`
    line-height: 1.2em;
    min-height: 1.8em;
    color: grey;
    display: block;
    text-align: center;
    font-size: 1.3vw;
    margin: .6em 0;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    overflow: hidden;
`;

export const ProfileItem = styled.li`
    display: inline-block;
    vertical-align: top;
    position: relative;
    width: 10vw;
    max-width: 200px;
    min-width: 84px;
    margin: 0 2vw 0 0;
    height : 15vw;
`;

export const ProfilesList = styled.ul`
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
   
`;

export const Content = styled.div`

    max-width: 80%;
    background: #141414;

`;
export const ProfileItemLink = styled.a`
    text-decoration: none;
    cursor: pointer;
`;

