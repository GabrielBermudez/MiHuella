import NavBar from "./components/NavBar";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from "./components/ItemListContainer";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<h1>Has Error Ocurred</h1>} />
          <Route path="item/:id" element={<ItemDetailContainer />} />
          <Route path="category/:id" element={<ItemListContainer />} />
          <Route path="/cart" element={<Cart />} />
          {/*<Route path="contact" element={<ContactPage />} />*/}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
