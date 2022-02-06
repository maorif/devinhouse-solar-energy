import styled from "styled-components";

export const LogoImage = styled.img`

    width: 65%;
`;

export const LogoContainer = styled.div`

    width: 100%;
    margin: 15px;

    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;

    @media only screen and (max-width: 600px) {
        display: none;
    };
`;