"use client";

const darkTheme = "night";
const lightTheme = "light";

const setTheme = (theme: string) => {
    //const data_theme = getDataTheme(t);
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute('data-theme', theme);
}
const getThemePreference = () => {

    if (
        typeof localStorage !== "undefined" &&
        localStorage.getItem("theme")
    ) {
        return localStorage.getItem("theme");
    }
    return darkTheme;


};

const isDark = (theme: string) => {
    return theme === darkTheme;
}
export { isDark, setTheme, getThemePreference, darkTheme, lightTheme };