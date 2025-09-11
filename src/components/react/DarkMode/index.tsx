"use client";
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";

type Theme = "light" | "dark" | "system";
export default function DarkModeToogle() {
    const [theme, setTheme] = useState<Theme>("dark");
    const handleClick = () => setTheme((t) => (t === "light" ? "dark" : "light"));
    useEffect(() => {
        const isDarkMode = document.documentElement.classList.contains("dark");
        setTheme(isDarkMode ? "dark" : "light");
    }, []);
    useEffect(() => {
        const isDark =
            theme === "dark" ||
            (theme === "system" &&
                window.matchMedia("(prefers-color-scheme: dark)").matches);
        document.documentElement.classList[isDark ? "add" : "remove"]("dark");
    }, [theme]);

    return (

        <Button
            variant="outline" size="icon"
            className="cursor-pointer"
            onClick={handleClick}
            aria-label={`Toggle theme (current: ${theme})`}
        >
            <Sun
                className={`h-[1.2rem] w-[1.2rem] transition-all ${theme === "dark" ? "rotate-0 scale-100" : "rotate-0 scale-0"}`}
            />
            <Moon
                className={`absolute h-[1.2rem] w-[1.2rem] transition-all ${theme === "light" ? "rotate-0 scale-100" : "rotate-0 scale-0"}`}
            />
            <span className="sr-only">Toggle theme</span>
        </Button>

    );
}
