import React from "react";
import { ButtonTypes } from "./types"
import { styles } from "./index.styles";

export const Button = React.forwardRef((props: ButtonTypes, forwardedRef: React.ForwardedRef<HTMLButtonElement>) => {

    const { variant, children, className, ...rest } = props;

    return (
        <button
            className={`${styles.default} ${variant ? styles[variant] : styles.defaultColors} ${className && className}`}
            type="button"
            {...rest}
            ref={forwardedRef}
        >
            {children}
        </button>
    )
})

Button.displayName = 'Button';