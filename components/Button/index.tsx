import React from "react";
import { ButtonTypes } from "./types"

export const Button = React.forwardRef((props: ButtonTypes, forwardedRef: React.ForwardedRef<HTMLButtonElement>) => {

    const { primary, white, outline, black, children, className, ...rest } = props;

    return (
        <button
            className={`
            ${className && className}
            px-4 py-2 font-medium rounded-lg text-sm border-2 transition-colors focus-visible:outline-black flex items-center justify-center gap-3
            ${primary ? `bg-primary-600 border-primary-600 text-gray-50 hover:bg-primary-700 hover:border-primary-700`
            : outline && white ? `bg-transparent border-gray-50 text-gray-50`
                    : white ? `bg-gray-50 border-gray-50 text-gray-900 hover:bg-gray-100 hover:border-gray-100`
                        : black ? `bg-gray-900 border-gray-900 text-gray-50 hover:bg-gray-950 hover:border-gray-950`
                            : outline ? `bg-transparent border-gray-900 text-gray-900`
                                : `border-gray-100 hover:bg-gray-200 hover:border-gray-200 bg-gray-100`} 
            `}
            type="button"
            {...rest}
            ref={forwardedRef}
        >
            {children}
        </button>
    )
})