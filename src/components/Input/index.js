import React from "react";

import { ErrorMessage, InputContainer, InputLabel, InputText } from "./styles";

function Input({label, errorText, error, width, ...otherProps}) {

    return (

        <InputContainer width={width}>

            {label && <InputLabel>{label}</InputLabel>}

            <InputText {...otherProps}/>

            {error && <ErrorMessage>{errorText}</ErrorMessage>}

        </InputContainer>

    );
};

export default Input;