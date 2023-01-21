const setTheme = (theme: string) => {
    if (theme === "light") {
        document.body.classList.remove("dark");
        return;
    }
    document.body.classList.add("dark");
}

const getTheme = () => {
    if (typeof window !== "undefined") {
        const theme = localStorage.getItem("theme")
        if (theme) return theme;
    }
    return "dark";
}

const saveTheme = (theme: string) => {
    if (typeof window !== "undefined") {
        localStorage.setItem("theme", theme);
    }
}

const toggleTheme = () => {
    if (typeof window !== "undefined") {
        const current_theme = localStorage.getItem("theme") || "dark";
        saveTheme(current_theme == "light" ? "dark" : "light");
        setTheme(getTheme());
    }
    return;
}

export {setTheme, getTheme, saveTheme, toggleTheme};