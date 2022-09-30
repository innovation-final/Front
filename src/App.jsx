import React from 'react';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from 'react-query';
import Router from './Router';
import GlobalStyles from './GlobalStyles';

function App() {
    const queryClient = new QueryClient();
    return (
        <QueryClientProvider client={queryClient}>
            <RecoilRoot>
                <GlobalStyles />
                <Router />
            </RecoilRoot>
        </QueryClientProvider>
    );
}

export default App;
