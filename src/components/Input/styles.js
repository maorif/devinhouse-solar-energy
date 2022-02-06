import styled from "styled-components";

export const InputContainer = styled.div`
    width: ${(props) => props.width ? props.width : '40%'};
    display: flex;
    flex-flow: column;

    gap: 10px;

    @media only screen and (max-width: 600px){
        width: ${(props) => props.width ? props.width : '150px'};
    };
`;

export const InputLabel = styled.label`
    font-weight: bold;
    font-size: 16px;
    color: #3a403e;
    padding-left: 2px;
`;

export const InputText = styled.input`

    width: 100%;
    height: 45px;
    padding-left: 5px;
    border: 1px solid gray;
    border-radius: 5px;
`;

export const ErrorMessage = styled.div`
    color: red;
    font-size: 14px;
`;