import styled from "styled-components";

export const InputLoginContainer = styled.div`
    width: 100%;
    height: 55px;
    display: flex;
    justify-content: left;
    align-items: center;
    flex-flow: row;
    gap: 10px;

    border: 1px solid gray;
    border-radius: 5px;
`;

export const InputLoginText = styled.input`

    width: 80%;
    height: 100%;
    padding-left: 5px;
    border: none;
    border-radius: 5px;

    &:focus {
        border-color: black;
    };
`;
