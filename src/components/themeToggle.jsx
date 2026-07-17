import { useState, useEffect } from 'react'
import { Moon, Sun } from 'lucide-react'


export default function ThemeToggle () {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('theme-preference') || ''
    })

    useEffect(() => {
        const rootHtml = document.documentElement;

        if (theme) {
            rootHtml.style.colorScheme = theme;
            localStorage.setItem('theme-preference', theme)
        }else {
            rootHtml.style.removeProperty('colorScheme')
        }
    }, [theme])

    const toggleTheme = () => {
        setTheme( (prevTheme) => {
            if(!prevTheme) {
                const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                return isSystemDark ? 'light' : 'dark';
            }
            return prevTheme === 'light' ? 'dark' : 'light'
        });
    };

    return (
        <button onClick={toggleTheme}>
            {theme === 'dark' ? <Moon size={18} /> : <Sun size={18} />}

        </button>
    )
}