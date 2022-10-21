import React, { useContext, useEffect } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ThemeProvider } from 'styled-components';
import LiveChat from './component/livechat/LiveChat';
import Router from './Router';
import GlobalStyles from './GlobalStyles';
import { lightTheme, darkTheme } from './theme/ThemeColor';
import LoadingSpinner from './component/elements/LoadingSpinner';
import Store, { DarkModeContext } from './contexts/Store';

function App() {
    const { isDark, setIsDark } = useContext(DarkModeContext);
    const queryClient = new QueryClient();

    useEffect(() => {
        if (isDark === null) {
            localStorage.setItem('app_theme', 'lightMode');
            setIsDark(localStorage.getItem('app_theme'));
        }
    }, [isDark]);

    return (
        <QueryClientProvider client={queryClient}>
            <Store>
                <ThemeProvider
                    theme={isDark === 'darkMode' ? darkTheme : lightTheme}
                >
                    <GlobalStyles />
                    <React.Suspense fallback={<LoadingSpinner />}>
                        <Router />
                        <LiveChat />
                    </React.Suspense>
                </ThemeProvider>
                <ReactQueryDevtools initialIsOpen={false} />
            </Store>
        </QueryClientProvider>
    );
}

export default App;
