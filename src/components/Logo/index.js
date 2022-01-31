import React from "react";
import { LogoImage } from "./styles";

function Logo({...otherProps}) {

    return <LogoImage 
        {...otherProps}
        src={require('../../assets/images/logo.png')}/>
};


export default Logo;