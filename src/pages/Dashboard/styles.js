import styled from "styled-components";

export const CardContainer = styled.div`
    width: 100%;
    height: 20%;

    /* border: 1px solid black; */

    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    align-content: center;
    gap: 25px;

`;

export const Card = styled.div`
    width: 15%;
    height: 65%;

    border-radius: 10px;

    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    background-color: #ffff;

    &:hover {
        color: blue;
        cursor: pointer;
        border: 1px solid blue;
    }
`;

export const CardTitle = styled.h3`   
`;

export const CardData = styled.p`

    font-size: 32px;
    font-weight: bold;
`;

export const GraphContainer = styled.div`

    width: 65%;
    margin: 50px auto;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    gap: 15px;

    border-radius: 10px;
    padding: 20px;

    background-color: #ffff;

`;

export const GraphTitle = styled.h2`

    font-size: 20px;
    color: gray;
    font-weight: bold;
`;

export const CardYearContainer = styled.div`

    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    gap: 10px;
`;

export const CardYear = styled.div`

    width: 20%;

    text-align: center;

    border: 1px solid black;

    border-radius: 5px;

    &:hover {
        cursor: pointer;
        border: 1px solid blue;
        color: blue;
    }
`;
