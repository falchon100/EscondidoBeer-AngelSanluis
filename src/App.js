import "./App.css";
import ItemCount from "./components/ItemCount/ItemCount";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { Navbar } from "./components/Navbar/Navbar";
function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting={"Nuestros productos"} />
      <ItemCount />
    </div>
  );
}

export default App;
