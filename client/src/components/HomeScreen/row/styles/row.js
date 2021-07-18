import styled from "styled-components";

export const SingleRow = styled.div`

`;

export const RowPosters = styled.div`
    display :flex;
    overflow-y : hidden;
    overflow-x : scroll;
    padding : 20px;

    &::-webkit-scrollbar{
        display : none;
    }
    
`;

export const Title = styled.h2`
    
    display : flex;
    color: #e5e5e5;
    font-weight: 700;
    line-height: 1.25vw;
    font-size: 1.4vw;
    margin-left : 20px;
    
`;

export const Poster = styled.img`
    max-height: 100px;
    object-fit : contain;
    margin-right : 10px;
    width : 100%;
    transition : transform 450ms;

    &:hover{
        transform: scale(1.15);
        opacity : 1;
    }
`;

export const LargePoster = styled.img`
    max-height: 350px;
    object-fit : contain;
    margin-right : 10px;
    width : 100%;
    transition : transform 450ms;

    &:hover{
        transform: scale(1.20);
        opacity : 1;
    }
`;