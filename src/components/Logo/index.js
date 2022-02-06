import React from "react";
import { LogoContainer, LogoImage } from "./styles";

function Logo({...otherProps}) {

    return (
    
        <LogoContainer>
            <LogoImage 
                {...otherProps}
                src={require('../../assets/images/logo.png')}/>
        </LogoContainer>
        
    );
};

export default Logo;