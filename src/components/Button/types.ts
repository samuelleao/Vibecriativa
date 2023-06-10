export interface ButtonTypes extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    primary?: boolean,
    white?: boolean,
    black?: boolean,
    outline?: boolean,
    secondary?: boolean,
    variant?: 'primary' | 'white' | 'black' | 'outline' | 'secondary' | 'outlineBlack',
    children?: React.ReactNode,
    ref?: HTMLButtonElement | undefined
}