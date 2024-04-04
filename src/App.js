import { MyNavbar } from "./components/navbar/Navbar";
import { ItemListContainer } from "./components/itemListContainer/ItemListContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import { ItemDetailContainer } from "./components/itemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import {Cart} from "./components/cart/Cart";
import { Checkout } from "./components/checkout/Checkout";
import "./App.css"

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <MyNavbar />
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer greeting="Bienvenidos a mi app" />}
          />
          <Route
            path="/categories/:categoryId"
            element={<ItemListContainer greeting="Categoria: " />}
          />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/ckeckout" element={<Checkout />}></Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
