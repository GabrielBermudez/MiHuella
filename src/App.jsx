import NavBar from "./components/NavBar";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from "./components/ItemListContainer";

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
          {/*<Route path="contact" element={<ContactPage />} />*/}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
