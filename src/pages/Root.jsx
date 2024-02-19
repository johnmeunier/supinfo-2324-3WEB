import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import { LevelContext } from "../services/LevelContext";

export default () => {
  const [level, setLevel] = useState(1);
  return (
    <>
      <LevelContext.Provider value={{ level, setLevel }}>
        <Header />
        <Outlet />
        <Footer />
      </LevelContext.Provider>
    </>
  );
};
