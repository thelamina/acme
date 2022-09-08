import { ICart } from '@acme/shared/models';

type CheckoutFuncType = (cart: ICart) => Promise<any>;

export const checkout: CheckoutFuncType = async (cart) => {
  const data = await fetch('/api/checkout', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(cart),
  });
  return data.json();
};
