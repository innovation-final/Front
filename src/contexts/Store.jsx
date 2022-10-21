import React, { useState, useMemo, createContext } from 'react';

export const DarkModeContext = createContext({
    isDark: localStorage.getItem('app_theme'),
    handler: () => {},
    setIsDark: () => {},
});

function Store({ children }) {
    const [isDark, setIsDark] = useState(localStorage.getItem('app_theme'));
    const handler = () => {
        if (isDark === 'lightMode') {
            localStorage.setItem('app_theme', 'darkMode');
        } else {
            localStorage.setItem('app_theme', 'lightMode');
        }
        setIsDark(localStorage.getItem('app_theme'));
        window.location.reload();
    };

    const value = useMemo(
        () => ({
            isDark,
            handler,
            setIsDark,
        }),
        [isDark, handler, setIsDark],
    );

    return (
        <DarkModeContext.Provider value={value}>
            {children}
        </DarkModeContext.Provider>
    );
}

export default Store;
