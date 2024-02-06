import "./App.css";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import HomePage from "./pages/Homepage";
import PokemonList from "./pages/Pokemon/List";
import PokemonDetails from "./pages/Pokemon/Details";
import Root from "./pages/Root";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Root />}>
      <Route path="/" element={<HomePage />} />
      <Route path="pokemon/" element={<PokemonList />} />
      <Route path="pokemon/:name" element={<PokemonDetails />} />
    </Route>
  )
);

const App = () => <RouterProvider router={router} />;

export default App;
