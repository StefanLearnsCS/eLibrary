import React from "react";
import { FieldInputProps, FormikProps } from "formik";

interface Props {
    field: FieldInputProps<any>;
    form: FormikProps<any>;
    placeholder?: string;
}

export const TextField: React.FC<Props> = ({ field, form, placeholder }) => {
    return (
        <input 
            type="text" 
            className="input input-bordered w-full max-w-xl" 
            {...field}  // Pass formik's field props to the input
            placeholder={placeholder}
        />
    )
}
