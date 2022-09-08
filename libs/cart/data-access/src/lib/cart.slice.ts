import {
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
  createSlice,
  EntityState,
} from '@reduxjs/toolkit';
import { ICartItem } from '@acme/shared/models';
import { checkout } from './cart-data-access';

export const CART_FEATURE_KEY = 'cart';

export interface CartState extends EntityState<ICartItem> {
  cartStatus: 'ready' | 'pending' | 'ordered' | 'error';
  error?: string;
  order?: string;
}

export const cartAdapter = createEntityAdapter<ICartItem>();

export const checkoutCart = createAsyncThunk<{ order: string }, ICartItem[]>(
  'cart/checkoutStatus',
  (items) => checkout({ items })
);

export const initialCartState: CartState = cartAdapter.getInitialState({
  cartStatus: 'ready',
});

export const cartSlice = createSlice({
  name: CART_FEATURE_KEY,
  initialState: initialCartState,
  reducers: {
    add: cartAdapter.addOne,
    remove: cartAdapter.removeOne,
  },
  extraReducers: (builder) => {
    builder
      .addCase(checkoutCart.pending, (state: CartState) => {
        state.cartStatus = 'pending';
      })
      .addCase(checkoutCart.fulfilled, (state: CartState, action) => {
        state.order = action.payload.order;
        state.cartStatus = 'ordered';
      })
      .addCase(checkoutCart.rejected, (state: CartState, action) => {
        state.cartStatus = 'error';
        state.error = action.error.message;
      });
  },
});

export const cartReducer = cartSlice.reducer;

export const cartActions = cartSlice.actions;

const { selectAll } = cartAdapter.getSelectors();

// TODO: fix rootstate typing
export const getCartState = (rootState: any): CartState =>
  rootState[CART_FEATURE_KEY];

export const selectCartItems = createSelector(getCartState, selectAll);

export const selecteCartStatus = createSelector(
  getCartState,
  (state) => state.cartStatus
);

export const selectOrderNumber = createSelector(
  getCartState,
  (state) => state.order
);

export const selectTotal = createSelector(selectCartItems, (items) =>
  items.reduce((total, item) => total + item.cost, 0)
);
