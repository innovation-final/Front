import React, { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ThemeProvider } from 'styled-components';
import LiveChat from './component/livechat/LiveChat';
import Router from './Router';
import GlobalStyles from './GlobalStyles';
import { lightTheme, darkTheme } from './theme/ThemeColor';
import { isDarkState } from './atoms/common/commonState';
import LoadingSpinner from './component/elements/LoadingSpinner';

function App() {
    let DARK_MODE = localStorage.getItem('app_theme');
    const isDark = useRecoilValue(isDarkState);
    const queryClient = new QueryClient();

    useEffect(() => {
        if (!DARK_MODE) localStorage.setItem('app_theme', 'lightMode');
        DARK_MODE = localStorage.getItem('app_theme');
        console.log(isDark);
    }, [DARK_MODE]);

    return (
        <QueryClientProvider client={queryClient}>
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
        </QueryClientProvider>
    );
}

export default App;
