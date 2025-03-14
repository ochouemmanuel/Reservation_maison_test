// Import all of Bootstrap's CSS


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import ProductList from "./composants/ProductList";
import Cart from "./composants/Cart";
import Checkout from "./composants/Checkout";
import OrderDetails from "./composants/OrderDetails";

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order-confirmation" element={<OrderDetails />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
