import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './layout/Layout';
import { Cart } from './pages/cart/Cart';
import { Products } from './pages/products/Products';
import { Login } from './pages/sign-in/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to='/login' replace />} />
        <Route element={<Layout />}>
          <Route path='/shop' element={<Products />} />
          <Route path='/cart' element={<Cart />} />
        </Route>
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
