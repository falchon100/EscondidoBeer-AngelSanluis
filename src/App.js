import "./App.css";
import ItemCount from "./components/ItemCount/ItemCount";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { Navbar } from "./components/Navbar/Navbar";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartProvider from "./Context/CartProvider";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={<ItemListContainer greeting="Nuestros productos" />}
            />
            <Route
              path="/category/:categoryName"
              element={<ItemListContainer />}
            />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
          </Routes>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
