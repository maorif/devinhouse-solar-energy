import React from "react";
import { DefaultForm } from "./styles";

function Form({children, ...otherProps}) {

    return <DefaultForm {...otherProps}>{children}</DefaultForm>;
};

export default Form;