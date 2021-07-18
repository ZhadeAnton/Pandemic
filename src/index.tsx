import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react';

import './index.css';
import store from './Redux/Store/Store';
import {persistor} from './Redux/Store/Store';
import AppContainer from './Containers/AppContainer';
import NotificationProvider from './Providers/NotificationProvider';

ReactDOM.render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <NotificationProvider>
            <AppContainer />
          </NotificationProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>,
    document.getElementById('root')
);
