import styled from "styled-components";

export const Table = styled.table`
    width: 70%;
    /* border: 1px solid black; */
    background-color: #ffff;
    padding: 10px;
    border-radius: 10px;
    text-align: center;
    margin: 10px 0 0 50px;

`;

export const TableHeader = styled.thead`
    border-bottom: 1px solid lightgray;
    
`;

export const TableHeaderItem = styled.th`
    text-align: center;
    font-weight: bold;
    padding: 10px;
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
`;

export const EditButton = styled.button`
    background-color: #55d4b2;
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
`;

export const RemoveButton = styled.button`
    background-color: #b80d35;
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
`;


export const UnitsTitle = styled.h2`

    color: #3a403e;
    font-size: 24px;
    font-weight: bold;
    
    margin: 50px 0 0 50px;
    padding: 10px;
`;
