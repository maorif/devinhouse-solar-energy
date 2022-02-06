import React from "react";
import ReactDatePicker from "react-datepicker";
import { DatePickerContainer, DatePickerLabel } from "./styles";

function DatePickerSelect({label, ...otherProps}) {

    return (
        <DatePickerContainer>
            <DatePickerLabel>{label}</DatePickerLabel>
            <ReactDatePicker {...otherProps}/>
        </DatePickerContainer>   
    );
};

export default DatePickerSelect;