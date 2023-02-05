import type { SyntheticEvent } from "react";
import { toggleTheme } from "@/utils/theme";

export const getAge = (birthdate: Date) => {
    return Math.abs(new Date(Date.now() - birthdate.getTime()).getUTCFullYear() - 1970);
};

export const handleToggleTheme = (e: SyntheticEvent) => {
    e.preventDefault();
    toggleTheme();
};

export const copyToClipboard = async (text: string) => {
    if ("clipboard" in navigator) {
        return await navigator.clipboard.writeText(text);
    }
    return document.execCommand("copy", true, text);
};
