import React from "react";
import { DefaultSelect, SelectContainer, SelectLabel } from "./styles";
import { ErrorMessage } from "../Input/styles";

function Select({label, options, description, error, errorText, ...otherProps}) {

    return (

        <SelectContainer>
            <SelectLabel>{label}</SelectLabel>
            <DefaultSelect {...otherProps}>
                <option disabled value=''>{description}</option>
                {
                    options.map(option => <option
                        key={option.id}
                        value={option.id}>
                        {option.name}
                    </option>)
                }
            </DefaultSelect>

            {error && <ErrorMessage>{errorText}</ErrorMessage>}
            
        </SelectContainer>
    );
};

export default Select;