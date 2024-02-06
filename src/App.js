import "./App.css";
import HomePage from "./pages/Homepage";
import PokemonList from "./pages/Pokemon/List";
import PokemonDetails from "./pages/Pokemon/Details";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "pokemon/",
    element: <PokemonList />,
  },
  {
    path: "pokemon/:name",
    element: <PokemonDetails />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
