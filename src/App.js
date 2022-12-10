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
import {QueryClient, QueryClientProvider} from 'react-query';
import {ReactQueryDevtools} from 'react-query/devtools';
import JWTAuthAuthProvider from '@crema/services/auth/jwt-auth/JWTAuthProvider';

const queryClinet = new QueryClient();
const store = configureStore();

const App = () => (
  <AppContextProvider>
    <Provider store={store}>
      <AppThemeProvider>
        <AppLocaleProvider>
          <BrowserRouter>
            <QueryClientProvider client={queryClinet}>
              <JWTAuthAuthProvider>
                <AuthRoutes>
                  <AppLayout />
                  <ReactQueryDevtools
                    initialIsOpen={false}
                    position='bottom-right'
                  />
                </AuthRoutes>
              </JWTAuthAuthProvider>
            </QueryClientProvider>
          </BrowserRouter>
        </AppLocaleProvider>
      </AppThemeProvider>
    </Provider>
  </AppContextProvider>
);

export default App;
