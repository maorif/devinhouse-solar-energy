import styled from "styled-components";

export const DefaultButton = styled.button`
    color: white;
    background-color: #4C5DF1;
    font-size: 90%;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    height: 45px;
    padding: 10px;
    min-width: 15%;

    &:hover{
        cursor: pointer;
    };
    
    @media only screen and (max-width: 900px) {
        font-size: 2vw;
    };
`;

export const DefaultButtonContainer = styled.div`
    margin: ${(props) => props.noMargin ? '0' : '50px'};
    width: 70vw;
    display: flex;
    justify-content: ${(props) => props.side && props.side};

    @media only screen and (max-width: 900px) {
        width: 60vw;
    };
`;