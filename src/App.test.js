import { render, screen, act, within, waitFor } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

test("render home page", () => {
  render(<App />);
  expect(screen.getByText("Homepage")).toBeInTheDocument();
});

test("render pokemon list", async () => {
  render(<App />);
  const $link = screen.getByRole("link", { name: /Liste/i });
  act(() => {
    $link.click();
  });
  expect(
    await screen.findByRole("heading", { level: 2, name: "Pokedex" })
  ).toBeInTheDocument();
});

test("render pokemon details", async () => {
  render(<App />);
  const $link = screen.getByRole("link", { name: /Liste/i });
  act(() => {
    $link.click();
  });
  expect(
    await screen.findByRole("heading", { level: 2, name: "Pokedex" })
  ).toBeInTheDocument();
  const $pokemon = await screen.findByRole("link", { name: /bulbasaur/i });
  act(() => {
    $pokemon.click();
  });
  expect(await screen.findByText("bulbasaur")).toBeInTheDocument();
});

test("display 50 pokemons", async () => {
  render(<App />);
  const $link = screen.getByRole("link", { name: /Liste/i });
  act(() => {
    $link.click();
  });
  const $select = screen.getByRole("combobox");
  userEvent.selectOptions($select, "50");
  await waitFor(() => {
    const $listPokemons = screen.getAllByRole("list")[1];
    const $options = within($listPokemons).getAllByRole("listitem");
    expect($options).toHaveLength(50);
  });
});
