import React from "react";
import { LButton, LButtonContainer } from "./styles";

function LoginButton({...otherProps}) {

    return (
    
        <LButtonContainer>
            <LButton {...otherProps}></LButton>
        </LButtonContainer>
    );
};

export default LoginButton;