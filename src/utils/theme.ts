const setTheme = (theme_name: "light" | "dark") => {
    localStorage.setItem("theme", theme_name);
}

const toggleTheme = () => {
    const current_theme = localStorage.getItem("theme") || "light";
    setTheme(current_theme == "light" ? "dark" : "light");
    document.body.dataset.theme = current_theme;
}

export { setTheme, toggleTheme };

