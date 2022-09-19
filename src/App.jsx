import React from 'react';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import Router from './Router';
import store from './redux/store/configStore';
import GlobalStyles from './GlobalStyles';

function App() {
    const queryClient = new QueryClient();
    return (
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                <GlobalStyles />
                <Router />
            </Provider>
        </QueryClientProvider>
    );
}

export default App;
