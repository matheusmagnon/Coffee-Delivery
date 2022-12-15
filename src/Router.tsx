import { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { CartListContext } from './context/CartListContext';
import { DefaultLayout } from './layouts/DefaultLayout';
import { Checkout } from './pages/Checkout';

import { Home } from './pages/Home';
import { Success } from './pages/Success';

export function Router() {
  const { order } = useContext(CartListContext);
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<Success />} />
      </Route>
    </Routes>
  );
}
