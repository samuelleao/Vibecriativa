import { ReactNode } from "react";

export interface ButtonTypes extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    primary?: boolean,
    children?: React.ReactNode,
    white?: boolean,
    black?: boolean,
    outline?: boolean,
    ref?: HTMLButtonElement | undefined
}