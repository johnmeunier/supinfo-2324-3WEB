import "./App.css";
import HomePage from "./pages/Homepage";
import PokemonList from "./pages/Pokemon/List";
import PokemonDetails from "./pages/Pokemon/Details";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="pokemon/" element={<PokemonList />} />
        <Route path="pokemon/:name" element={<PokemonDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
