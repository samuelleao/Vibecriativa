export interface ButtonTypes extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    primary?: boolean,
    children?: React.ReactNode,
    white?: boolean,
    black?: boolean,
    outline?: boolean,
    secondary?: boolean,
    ref?: HTMLButtonElement | undefined
}