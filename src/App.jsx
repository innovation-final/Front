import React from 'react';
import { useRecoilValue } from 'recoil';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from 'styled-components';
import LiveChat from './component/livechat/LiveChat';
import Router from './Router';
import GlobalStyles from './GlobalStyles';
import { lightTheme, darkTheme } from './theme/ThemeColor';
import { isDarkState } from './atoms/common/commonState';
import LoadingSpinner from './component/elements/LoadingSpinner';

function App() {
    const isDark = useRecoilValue(isDarkState);
    const queryClient = new QueryClient();
    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
                <GlobalStyles />
                <React.Suspense fallback={<LoadingSpinner />}>
                    <Router />
                    <LiveChat />
                </React.Suspense>
            </ThemeProvider>
        </QueryClientProvider>
    );
}

export default App;
