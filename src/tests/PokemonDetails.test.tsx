import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

test('Teste o componente <PokemonDetails.tsx />', async () => {
  render(<App />, { wrapper: BrowserRouter });

  const linkDetails = screen.getByRole('link', { name: /More details/i });
  await userEvent.click(linkDetails);
  screen.getByRole('heading', { name: /Pikachu Details/i });
  expect(linkDetails).not.toBeInTheDocument();
  screen.getByRole('heading', { name: /Summary/i });
  screen.getByText(/This intelligent Pokémon roasts hard berries with electricity to make them tender enough to eat./i);
});
test('Teste se existe na página uma seção com os mapas contendo as localizações do Pokémon', async () => {
  renderWithRouter(<App />);

  const linkDetails = screen.getByRole('link', { name: /More details/i });
  await userEvent.click(linkDetails);
  screen.getByRole('heading', { name: /Game Locations of Pikachu/i });
  const imagesLocation = screen.getAllByAltText('Pikachu location');
  expect(imagesLocation[0]).toHaveAttribute('src', 'https://archives.bulbagarden.net/media/upload/0/08/Kanto_Route_2_Map.png');
  expect(imagesLocation[0]).toHaveAttribute('alt', 'Pikachu location');
});
test('Teste se o usuário pode favoritar um Pokémon por meio da página de detalhes', async () => {
  render(<App />, { wrapper: BrowserRouter });
  const favoritePokemon = screen.getByLabelText(/Pokémon favoritado?/i);
  await userEvent.click(favoritePokemon);

  const favoriteIcon = screen.getByRole('img', { name: /Pikachu is marked as favorite/i });
  await userEvent.click(favoritePokemon);
  expect(favoriteIcon).not.toBeInTheDocument();
});
