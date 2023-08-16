import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import App from '../App';

test('Testa se a pokedex tem um texto h2 ', () => {
  render(<App />, { wrapper: BrowserRouter });

  screen.getByText('Encountered Pokémon');
});
test('Teste se é exibido o próximo Pokémon da lista quando o botão Próximo Pokémon é clicado', async () => {
  render(<App />, { wrapper: BrowserRouter });
  const button = screen.getByRole('button', { name: /próximo pokémon/i });
  await userEvent.click(button);
  screen.getByText('Charmander');
  await userEvent.click(button);
  screen.getByText('Caterpie');
  await userEvent.click(button);
  screen.getByText('Ekans');
  await userEvent.click(button);
  screen.getByText('Alakazam');
  await userEvent.click(button);
  screen.getByText('Mew');
  await userEvent.click(button);
  screen.getByText('Rapidash');
  await userEvent.click(button);
  screen.getByText('Snorlax');
  await userEvent.click(button);
  screen.getByText('Dragonair');
  await userEvent.click(button);
  screen.getByText('Pikachu');
});

test('Teste se a Pokédex tem os botões de filtro', async () => {
  render(<App />, { wrapper: BrowserRouter });

  const filtersBtn = screen.getAllByTestId('pokemon-type-button');
  const eletricBtn = screen.getByRole('button', { name: 'Electric' });
  expect(filtersBtn.length).toBeGreaterThan(0);

  await userEvent.click(eletricBtn);
  screen.getByText('Pikachu');
});
test('Teste se a Pokédex contém um botão para resetar o filtro', async () => {
  render(<App />, { wrapper: BrowserRouter });

  const allfilterBtn = screen.getByRole('button', { name: 'All' });
  const firebtn = screen.getByRole('button', { name: 'Fire' });
  await userEvent.click(firebtn);
  screen.getByText('Charmander');
  await userEvent.click(allfilterBtn);
  screen.getByText('Pikachu');
});
