import styled from "styled-components";

export const LButtonContainer = styled.div`
    width: 60%;
    height: 55px;
`;

export const LButton = styled.button`

    width: 100%;
    height: 100%;
    background: #55d4b2;
    color: #ffff;
    border: 1px solid #55d4b2;
    border-radius: 5px;
    font-weight: bold;
    font-size: 18px;

    &:hover {
        cursor: pointer;
        box-shadow: 1px 1px lightgray;
    };
`;