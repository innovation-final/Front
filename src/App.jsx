import React from 'react';
import { useRecoilValue } from 'recoil';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from 'styled-components';
import Router from './Router';
import GlobalStyles from './GlobalStyles';
import { lightTheme, darkTheme } from './theme/ThemeColor';
import { isDarkState } from './atoms/atoms';

function App() {
    const isDark = useRecoilValue(isDarkState);
    const queryClient = new QueryClient();
    return (
        <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
            <QueryClientProvider client={queryClient}>
                <GlobalStyles />
                <Router />
            </QueryClientProvider>
        </ThemeProvider>
    );
}

export default App;
