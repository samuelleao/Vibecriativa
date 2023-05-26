import React from "react"
import { InputTypes } from "./types"

export const Input = React.forwardRef((props: InputTypes, forwardedRef: React.ForwardedRef<HTMLInputElement>)=>{

    const {label, placeholder, className, error, helperText, required, register, registerName, icon: Icon, ...rest} = props;

    return (
        <fieldset className={`flex flex-col gap-3 ${className} relative`}>
            {label && (<label className="text-sm font-medium text-slate-900 flex items-center hover:cursor-pointer" htmlFor={label}>{label}{required && (<span className="text-red-700 ml-1">*</span>)}</label>)}
            {Icon && <Icon className="absolute h-full left-4 text-slate-400"/>}
            <input ref={forwardedRef} {...register && register(registerName, { required: required})} className={`autofill:shadow-[inset_0_0_0px_1000px_rgb(255,255,255)] focus:shadow-none w-full h-10 ${Icon ? `pl-11` : `pl-4`} border ${error ? "border-red-600" : "border-slate-200"} rounded text-sm focus:border-brand-primary-700`} type="text" placeholder={placeholder && placeholder} id={label && label} {...rest}/>
            {helperText && (<small className="text-slate-600 text-xs">{helperText}</small>)}
            {error && (<small className="text-red-600 text-xs">{error}</small>)}
        </fieldset>
    )
})

Input.displayName = 'Input';