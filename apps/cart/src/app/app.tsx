import React from 'react';
import { Route } from 'react-router-dom';

import '@nx-example/shared/ui-header';

import { CartPage } from '@nx-example/cart/feature-cart-page';

export const App = () => {
  return (
    <>
      <nx-example-header />
      <Route path="/cart" exact component={CartPage} />
    </>
  );
};

export default App;
