type Theme = "light" | "dark" | "init";
const dark = "night";
const light = "light";

const getDataTheme = (t: Theme) => {
    switch (t) {
        case "light":
            return light;
        case "dark":
            return dark;
        default:
            return "init";
    }

}
const getTheme = () => {
    return getThemePreference() as Theme;
}
const setTheme = (t: Theme) => {
    const data_theme = getDataTheme(t);
    localStorage.setItem("theme", t);
    document.documentElement.setAttribute('data-theme', data_theme);
}
const getThemePreference = () => {
    if (
        typeof localStorage !== "undefined" &&
        localStorage.getItem("theme")
    ) {
        return localStorage.getItem("theme");
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
};

const isDark = (theme: Theme) => {
    return theme === "dark";
}
export { type Theme, getDataTheme, isDark, setTheme, getTheme };