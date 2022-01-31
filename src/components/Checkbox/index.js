import React from "react";
import { CheckBoxLabel, CheckboxContainer, InputCheckbox } from "./styles";

function Checkbox({label, ...otherProps}) {

    return (

        <CheckboxContainer>
            <InputCheckbox 
                type='checkbox' 
                {...otherProps}/>
            <CheckBoxLabel>{label}</CheckBoxLabel>
        </CheckboxContainer>
    );
};

export default Checkbox;