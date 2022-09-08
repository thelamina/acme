import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import CartFeature from './cart-feature';

const store = configureStore({
  reducer: {},
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env['NODE_ENV'] !== 'production',
  enhancers: [],
});

describe('CartFeature', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Provider store={store}>
        <CartFeature />
      </Provider>
    );
    expect(baseElement).toBeTruthy();

  });
});
