import { Dispatch, SetStateAction } from "react";

export interface CookiesBoxTypes {
    setCookies: Dispatch<SetStateAction<boolean | null>>
}