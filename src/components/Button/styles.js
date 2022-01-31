import styled from "styled-components";
import Button from ".";

export const DefaultButton = styled.button`
    color: white;
    background-color: blue;
    font-size: 14px;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    height: 45px;
    padding: 10px;
    min-width: 20%;

    &:hover{
        cursor: pointer;
    };
    
`;

export const DefaultButtonContainer = styled.div`
    margin: ${(props) => props.noMargin ? '0' : '50px'};
    width: 70%;
    display: flex;
    justify-content: ${(props) => props.side && props.side};
`;