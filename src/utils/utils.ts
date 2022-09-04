import {SyntheticEvent} from "react";
import {toggleTheme} from "@utils/theme";

export const getAge = (birthdate: Date): number => {
    return Math.abs(new Date(Date.now() - birthdate.getTime()).getUTCFullYear() - 1970);
}

export const handleToggleTheme = (e: SyntheticEvent) => {
    e.preventDefault();
    toggleTheme();
}
