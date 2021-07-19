import styled from 'styled-components'

export const Header = styled.header`
    height : 450px;
    color : white;
    object-fit : contain;
    background-size : cover;
    background-position : center center;
    background-image : ${props => `url(${props.backgroundImage})`};
`;

export const Container = styled.div`
    display: flex;
    margin: 0 30px;
    height: 250px;
    justify-content: space-between;
    padding: 150px 0 0 0;
    flex-direction: column;
    align-items: normal;
    width: 50%;

    @media (max-width: 1000px) {
        margin: 0 30px;
    }
    
`;

export const Title = styled.h1`
    color: white;
    font-size: 50px;
    line-height: normal;
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
    margin: 0;
    left : 0;
`;
export const SubTitle = styled.h3`
    white-space: normal;
    color: white;
    font-size: 0.9rem;
    line-height: 1.3;
    max-width: 560px;
    height: 80px;
    
  `;

export const Buttons = styled.div`
    display : flex;
`;
export const PlayButton = styled.button`
    box-shadow: 0 0.6vw 1vw -0.4vw rgba(0, 0, 0, 0.35);
    background-color: rgba(51, 51, 51, 0.5);
    color: white;
    border-width: 0;
    outline : none;
    padding: 0.5rem 2rem;
    border-radius: 0.2vw;
    max-width: 100px;
    font-weight: 700;
    font-size: 20px;
    margin: 0.5rem  1rem;
    cursor: pointer;
    left:0;
    
    transition: background-color 0.5s ease;

    &:hover {
        background-color: #ff1e1e;
        color: white;
    }
  `;
export const AddToListButton = styled.button`
    box-shadow: 0 0.6vw 1vw -0.4vw rgba(0, 0, 0, 0.35);
    background-color: rgba(51, 51, 51, 0.5);
    color: white;
    border-width: 0;
    outline : none;
    padding: 0.5rem 2rem;
    border-radius: 0.2vw;
    font-weight: 700;
    font-size: 20px;
    margin: 0.5rem  1rem;
    cursor: pointer;
    
    transition: background-color 0.5s ease;

    &:hover {
        background-color: #ff1e1e;
        color: white;
    }
`;

export const Fade = styled.div`
    height : 7.4rem;
    background : linear-gradient(to bottom,rgba(0, 0, 0, 0.35),rgba(0, 0, 0, 0.1),rgba(0, 0, 0, 0.35)));
`;
