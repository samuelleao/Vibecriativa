import React from "react";
import { InputTypes } from "./types";

export const Input = React.forwardRef(
    (props: InputTypes, forwardedRef: React.ForwardedRef<HTMLInputElement>) => {
        const {
            type,
            label,
            subLabel,
            placeholder,
            className,
            error,
            helperText,
            required,
            register,
            registerName,
            asElement,
            icon: Icon,
            ...rest
        } = props;

        if (asElement === "textarea") {
            return (
                <fieldset className={`flex flex-col gap-3 ${className} relative`}>
                    {label && (
                        <label className="text-sm font-medium text-slate-900 flex items-center hover:cursor-pointer" htmlFor={label}>
                            {label}
                            {required && (<span className="text-red-700 ml-1">*</span>)}
                        </label>
                    )}
                    {Icon && <Icon className="absolute h-full left-4 text-slate-400" />}
                    <textarea
                        ref={forwardedRef}
                        {...register && register(registerName, { required: required })}
                        className={`
                        block p-2.5 w-full text-sm text-gray-900 rounded-lg border autofill:shadow-[inset_0_0_0px_1000px_rgb(255,255,255)] focus:shadow-none ${Icon ? `pl-11` : `pl-4`} ${error ? "border-red-600" : "border-slate-200"} rounded text-sm focus:border-primary-700`}
                        type="text"
                        placeholder={placeholder && placeholder}
                        id={label && label}
                        aria-label={label} 
                        rows="4"
                        {...rest}
                    >
                    </textarea>
                    {helperText && (<small className="text-slate-600 text-xs leading-relaxed">{helperText}</small>)}
                    {error && (<small className="text-red-600 text-xs">{error}</small>)}
                </fieldset>
            );
        }

        if (type === "radio") {
            return (
                <fieldset className="flex">
                    <div className="flex items-center h-5">
                        <input
                            ref={forwardedRef}
                            {...register && register(registerName, { required: required })}
                            aria-describedby={label}
                            type="radio"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-2 "
                            id={label && label}
                            {...rest}
                        />
                    </div>
                    <div className="ml-2 text-sm space-y-2">
                        {label && (
                            <label
                                htmlFor={label}
                                className="font-medium text-gray-900 text-sm cursor-pointer"
                            >
                                {label}
                            </label>
                        )}
                        {subLabel && (
                            <p id="helper-radio-text" className="text-xs font-normal text-gray-500">
                                {subLabel}
                            </p>
                        )}
                    </div>
                </fieldset>
            );
        }

        return (
            <fieldset className={`flex flex-col gap-3 ${className} relative`}>
                {label && (
                    <label className="text-sm font-medium text-slate-900 flex items-center hover:cursor-pointer" htmlFor={label}>
                        {label}
                        {required && (<span className="text-red-700 ml-1">*</span>)}
                    </label>
                )}
                {Icon && <Icon className="absolute h-full left-4 text-slate-400" />}
                <input
                    ref={forwardedRef}
                    {...register && register(registerName, { required: required })}
                    className={`rounded-lg autofill:shadow-[inset_0_0_0px_1000px_rgb(255,255,255)] focus:shadow-none w-full h-10 ${Icon ? `pl-11` : `pl-4`} border ${error ? "border-red-600" : "border-slate-200"} rounded text-sm focus:border-primary-700`}
                    type="text"
                    placeholder={placeholder && placeholder}
                    id={label && label}
                    aria-label={label} 
                    {...rest}
                />
                {helperText && (<small className="text-slate-600 text-xs">{helperText}</small>)}
                {error && (<small className="text-red-600 text-xs">{error}</small>)}
            </fieldset>
        );
    }
);

Input.displayName = 'Input';
