import styled from "styled-components";

export const SelectContainer = styled.div`
    width: 41%;
    display: flex;
    flex-flow: column;
    gap: 10px;
`;

export const SelectLabel = styled.label`
    font-weight: bold;
    font-size: 16px;
    color: gray;
    padding-left: 2px;
    color: #3a403e;
`;

export const DefaultSelect = styled.select`

    width: 100%;
    height: 45px;
    padding-left: 5px;
    border: 1px solid gray;
    border-radius: 5px;
    background-color: #ffff;

    &:focus {
        border-color: black;
    };

    &option {
        height: 30px;
    };
`;
