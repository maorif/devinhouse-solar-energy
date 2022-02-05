import styled from "styled-components";

export const Table = styled.table`
    width: 70vw;

    background-color: #ffff;
    padding: 10px;
    border-radius: 10px;
    text-align: center;
    margin: 10px 50px 0 50px;
    
    font-size: 1vw;

    @media only screen and (max-width: 900px) {
        font-size: 1.5vw;
        width: 60vw;
        margin: 10px 40px 0 40px;
    };

    @media only screen and (max-width: 600px) {
        font-size: 2vw;
        margin: 10px 25px 0 25px;
    };
`;

export const TableHeader = styled.thead`
    border-bottom: 1px solid lightgray;
`;

export const TableHeaderItem = styled.th`
    text-align: center;
    font-weight: bold;
    padding: 10px;

    @media only screen and (max-width: 900px) {
        display: ${(props) => props.show && 'none'}
    };
`;

export const TableBody = styled.tbody`
`;

export const Row = styled.tr`

    border-radius: 5px;
    height: 55px;
    width: 100%;
    border-bottom: 1px solid lightgray;
    border-radius: 10px;
`;

export const RowItem = styled.td`
    padding: 12px;
    color: #66686b;

    @media only screen and (max-width: 900px) {
        display: ${(props) => props.show && 'none'}
    };
`;

export const EditButton = styled.button`
    background-color: #8DB51B;
    color: white;
    border: none;
    width: 70%;
    height: 30px;

    border-radius: 5px;
    box-shadow: 2px 2px lightgray;

    &:hover{
        cursor: pointer;
        box-shadow: 3px 3px lightgray;
    };

    @media only screen and (max-width: 900px) {
        font-size: 1.5vw;
        width: 80%;
    };

    @media only screen and (max-width: 600px) {
        font-size: 2vw;
        width: 90%;
    };
`;

export const RemoveButton = styled.button`
    background-color: #D82D56;
    color: white;
    border: none;
    width: 70%;
    height: 30px;
    border-radius: 5px;

    box-shadow: 2px 2px lightgray;


    &:hover{
        cursor: pointer;
        box-shadow: 3px 3px lightgray;
    };

    @media only screen and (max-width: 900px) {
        font-size: 1.5vw;
        width: 80%;
    };

    @media only screen and (max-width: 600px) {
        font-size: 2vw;
        width: 90%;
    };
`;


export const UnitsTitle = styled.h2`

    color: #3a403e;
    font-size: 24px;
    font-weight: bold;
    
    margin: 50px 0 0 50px;
    padding: 10px;
`;
