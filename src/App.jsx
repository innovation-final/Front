import React from 'react';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import Router from './Router';
import store from './redux/store/configStore';
import GlobalStyles from './GlobalStyles';
import LiveChat from './component/livechat/LiveChat';

function App() {
    const queryClient = new QueryClient();
    return (
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                <GlobalStyles />
                <Router />
                <LiveChat />
            </Provider>
        </QueryClientProvider>
    );
}

export default App;
