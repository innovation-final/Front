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
// import NoticePage from './component/notice/NoticePage';

function App() {
    const isDark = useRecoilValue(isDarkState);
    const queryClient = new QueryClient();
    return (
        <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
            <QueryClientProvider client={queryClient}>
                <GlobalStyles />
                <React.Suspense fallback={<LoadingSpinner />}>
                    <Router />
                    {/* <NoticePage /> */}
                    <LiveChat />
                </React.Suspense>
            </QueryClientProvider>
        </ThemeProvider>
    );
}

export default App;
