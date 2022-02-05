import styled from "styled-components";

export const LoginContainer = styled.div`
    height: 100vh;
    width: 50%;
    
    display:flex;
    flex-flow: row;
    gap: 50px;
    justify-content: center;
    align-items: center;
`;

export const LoginImage = styled.img`
    width: 50%;
    height: 100vh;

    @media only screen and (max-width: 1000px) {
        display: none;
    };

`;

export const LoginFormContainer = styled.div`
    width: 50%;
    height: 100vh;
    display: flex;
    flex-flow: column;
    gap: 20px;
    justify-content: center;
    align-items: center;
`;

export const LoginForm = styled.form`
    width: 70%;
    padding-top: 20px;

    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    row-gap: 18px;
`;

export const Greet = styled.h1`
    color: gray;
    font-size: 3vw;
`;

export const LogoForLogin = styled.img`
    width: 20vw;
`;