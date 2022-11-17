import React from 'react';
import {Provider} from 'react-redux';

import './shared/styles/crema.less';
import {
  AppContextProvider,
  AppLayout,
  AppLocaleProvider,
  AppThemeProvider,
  AuthRoutes,
} from './@crema';
import configureStore from './redux/store';
import {BrowserRouter} from 'react-router-dom';
import './@crema/services/index';
import FirebaseAuthProvider from './@crema/services/auth/firebase/FirebaseAuthProvider';
import {QueryClient, QueryClientProvider} from 'react-query';
import {ReactQueryDevtools} from 'react-query/devtools';

const queryClinet = new QueryClient();
const store = configureStore();

const App = () => (
  <AppContextProvider>
    <Provider store={store}>
      <AppThemeProvider>
        <AppLocaleProvider>
          <BrowserRouter>
            <FirebaseAuthProvider>
              <AuthRoutes>
                <QueryClientProvider client={queryClinet}>
                  <AppLayout />
                  <ReactQueryDevtools
                    initialIsOpen={false}
                    position='bottom-right'
                  />
                </QueryClientProvider>
              </AuthRoutes>
            </FirebaseAuthProvider>
          </BrowserRouter>
        </AppLocaleProvider>
      </AppThemeProvider>
    </Provider>
  </AppContextProvider>
);

export default App;
