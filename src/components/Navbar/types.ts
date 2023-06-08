import { Dispatch, MutableRefObject, ReactNode, SetStateAction } from "react";

export interface NavbarTypes {
    scrollEffect?: boolean,
    navbarRef?: React.RefObject<HTMLDivElement>,
    isNavbarVisible?: boolean,
    setIsNavbarVisible?: any
}