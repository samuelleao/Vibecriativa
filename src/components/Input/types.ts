import { FieldValues, UseFormRegister } from "react-hook-form/dist/types";
import { ValidationRule } from "react-hook-form"

export interface InputTypes extends React.InputHTMLAttributes<HTMLInputElement>{
    label?: string,
    placeholder?: string,
    className?:  string | undefined,
    error?: string,
    helperText?: string,
    required?: boolean,
    register?: any,
    registerName?: string,
    icon?: any,
    subLabel?: string,
    defaultChecked?: boolean;
    asElement?: "textarea"
}