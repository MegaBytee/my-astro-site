"use client";
import { useState, useEffect } from "preact/hooks";
import { Moon, Sun } from "lucide-preact";
import { isDark, type Theme, setTheme, getTheme } from "@/theme";
export default function DarkModeToogle() {

    const [theme, setThemeState] = useState<Theme>("init");

    useEffect(() => {
        const t = getTheme()
        setThemeState(t);
    }, []);
    const handleClick = () => {

        var nextTheme: Theme;

        if (isDark(theme)) {
            nextTheme = "light"
        } else {
            nextTheme = "dark"
        }
        console.log(nextTheme);

        setThemeState(nextTheme);
        setTheme(nextTheme)

    }

    // while unknown, render nothing (or a skeleton)
    if (theme === "init") {
        return null; // or a spinner / invisible button with aria-hidden
    }
    return (
        <button
            aria-label={`Toggle theme (current: ${theme})`}
            className="btn btn-square"
            onClick={handleClick}>

            {isDark(theme) ? <Sun size={20} /> : <Moon size={20} />}
        </button>
    )

}