import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import { LevelContext } from "../services/LevelContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { usePokemon } from "../services/usePokemon";

export const queryClient = new QueryClient();

export default () => {
  const [level, setLevel] = useState(1);

  return (
    <>
      <LevelContext.Provider value={{ level, setLevel }}>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <Header />
          <Outlet />
          <Footer />
        </QueryClientProvider>
      </LevelContext.Provider>
    </>
  );
};
