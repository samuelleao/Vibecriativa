export interface FeedbackToUserTypes {
    open: boolean,
    setOpen?: (open: boolean) => void,
    title: string,
    description: string
}