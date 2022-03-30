import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemList from "./components/ItemList";

function App() {
  return (
    <div className="App">
      <NavBar />
        {/*<ItemListContainer title="Catalogo de Productos"/>*/}
        <ItemList />
    </div>
  );
}

export default App;
