'use client';

import { persistor, store } from '@/redux/store';
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

// eslint-disable-next-line react/prop-types
const Providers = ({ children }) => {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            persistStore(store);
        }
    }, []);

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              {children}
            </PersistGate>
        </Provider>
    );
};

export default Providers;
