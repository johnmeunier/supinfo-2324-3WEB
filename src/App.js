import "./App.css";
import Router from "./components/Router";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Router></Router>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
