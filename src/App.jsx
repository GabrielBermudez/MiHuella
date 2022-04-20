import NavBar from "./components/NavBar";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from "./components/ItemListContainer";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<h1>Has Error Ocurred</h1>} />
            <Route path="item/:id" element={<ItemDetailContainer />} />
            <Route path="category/:category" element={<ItemListContainer />} />
            <Route path="/cart" element={<CartPage />} />
            {/*<Route path="contact" element={<ContactPage />} />*/}
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
