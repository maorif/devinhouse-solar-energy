import React from "react";
import { InputContainer, ErrorMessage } from "../Input/styles";
import { InputLoginContainer, InputLoginText } from "./styles";

function InputLogin({icon, errorText, error, width, ...otherProps }) {

    return (

        <InputContainer width={width}>
        
            <InputLoginContainer>
            
                {icon}

                <InputLoginText {...otherProps} />

            </InputLoginContainer>

            {error && <ErrorMessage>{errorText}</ErrorMessage>}

        </InputContainer>
        

        
    );

};

export default InputLogin;