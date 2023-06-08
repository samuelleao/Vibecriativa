import { MutableRefObject, ReactNode } from "react";

export interface NavbarTypes {
    scrollEffect?: boolean,
    navbarRef?: React.RefObject<HTMLDivElement>,
    isNavbarVisible?: boolean
}