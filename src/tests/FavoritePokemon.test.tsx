import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import { FavoritePokemon } from '../pages';
import App from '../App';

test('Teste o componente <FavoritePokemon.tsx />', async () => {
  renderWithRouter(<FavoritePokemon />);
  const notFoundMenssage = screen.getByText(/no favorite pokémon found/i);
  expect(notFoundMenssage).toBeInTheDocument();
});
test('Teste se são exibindo apenas os Pokémons favoritados ', async () => {
  renderWithRouter(<App />);
  const moreDetails = screen.getByRole('link', { name: 'More details' });
  await userEvent.click(moreDetails);
  const checkbox = screen.getByRole('checkbox', { name: /Pokémon favoritado?/i });
  await userEvent.click(checkbox);
  expect(checkbox).toBeChecked();

  const favoritePokemon = screen.getByRole('link', { name: /Favorite Pokémon/i });
  await userEvent.click(favoritePokemon);
  screen.getByText('Pikachu');
});
