import React from "react";
import { Link } from "react-router-dom";
import { DefaultButton, DefaultButtonContainer } from "./styles";

function Button({children, noMargin, side, link,...otherProps}) {

    return (
        <DefaultButtonContainer noMargin={noMargin} side={side}>
            {
                link ? <Link to={link}><DefaultButton {...otherProps}>{children}</DefaultButton></Link> 
                    : <DefaultButton {...otherProps}>{children}</DefaultButton>
            }
        </DefaultButtonContainer>
    )
};

export default Button;