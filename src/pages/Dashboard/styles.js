import styled from "styled-components";

export const CardContainer = styled.div`
    width: 100%;
    height: 20%;

    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    align-content: center;
    gap: 25px;

    @media only screen and (max-width: 600px) {
        margin-top: 5vw;
    };

`;

export const Card = styled.div`
    width: 15%;
    height: 75%;

    border-radius: 10px;
    border: 1px solid lightgray;

    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    background-color: #ffff;

    &:hover {
        cursor: pointer;
        border-color: blue;
        color: blue;
    };

    @media only screen and (max-width: 900px) {
        height: 30%;
        width: 30%;
    };

    @media only screen and (max-width: 600px) {
        height: 40%;
        width: 30%;
    };
`;

export const CardTitle = styled.h3` 
    text-align: center;
    font-size: 1vw;

    @media only screen and (max-width: 900px) {
        font-size: 1.5vw;
    };

    @media only screen and (max-width: 600px) {
        font-size: 2vw;
    };
`;

export const CardData = styled.p`
    display: flex;
    font-size: 1.5vw;
    font-weight: bold;

    @media only screen and (max-width: 900px) {
        font-size: 2.2vw;
    };

    @media only screen and (max-width: 600px) {
        font-size: 3vw;
    };
`;

export const GraphContainer = styled.div`

    width: 65%;
    margin: 20px auto;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    gap: 20px;

    border-radius: 10px;
    padding: 20px;

    background-color: #ffff;
    border: 1px solid lightgray;

`;

export const GraphTitle = styled.h2`

    font-size: 24px;
    color: #374557;
    font-weight: bold;
    
    @media only screen and (max-width: 600px) {
        font-size: 3vw;
    };
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
    padding: 1px;
    font-size: auto;
    text-align: center;
    border: 1px solid;
    border-color: ${(props) => props.selected ? 'blue' : '#374557'};
    color: ${(props) => props.selected ? 'blue' : '#374557'};

    border-radius: 5px;

    &:hover {
        cursor: pointer;
        border-color: blue;
        color: blue;
    };

    @media only screen and (max-width: 600px) {
        font-size: 3vw;
    };
`;