import React, { useContext, useEffect } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import styled, { ThemeProvider } from 'styled-components';
import { AnimatePresence } from 'framer-motion';
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
    }, []);

    return (
        <QueryClientProvider client={queryClient}>
            <Store>
                <ThemeProvider
                    theme={isDark === 'darkMode' ? darkTheme : lightTheme}
                >
                    <GlobalStyles />
                    <React.Suspense
                        fallback={
                            <LoadingWrapper>
                                <LoadingSpinner />
                            </LoadingWrapper>
                        }
                    >
                        <AnimatePresence>
                            <Router key="router" />
                            <LiveChat key="liveChat" />
                        </AnimatePresence>
                    </React.Suspense>
                </ThemeProvider>
            </Store>
        </QueryClientProvider>
    );
}

export default App;

const LoadingWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;
