import styled from "styled-components";

export const Table = styled.table`
    width: 70vw;

    background-color: #ffff;
    border-radius: 10px;
    text-align: center;
    margin: 50px;
    border-collapse: collapse;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.22);

    
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
    text-align: center;
    align-content: center;
    align-items: center;
`;

export const TableHeaderItem = styled.td`

    padding: 20px;
    font-weight: bold;
    align-content: center;
    text-align: center;

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
    font-weight: bold;

    border-radius: 5px;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.25);

    &:hover{
        cursor: pointer;
        box-shadow: 0 3px 3px rgba(0, 0, 0, 0.25);
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
    font-weight: bold;

    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.25);


    &:hover{
        cursor: pointer;
        box-shadow: 0 3px 3px rgba(0, 0, 0, 0.25);
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

    color: #374557;
    font-size: 24px;
    font-weight: bold;
    
    margin: 50px 0 0 50px;
    padding: 10px;

    @media only screen and (max-width: 900px) {
        margin: 10px 40px 0 40px;
    };

    @media only screen and (max-width: 600px) {
        margin: 10px 25px 0 25px;
    };
`;
