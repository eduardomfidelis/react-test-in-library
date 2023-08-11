import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import App from '../App';

test('Teste se o topo da aplicação contém um conjunto fixo de links de navegação', async () => {
  render(<App />, { wrapper: BrowserRouter });
  const linkHome = screen.getByRole('link', { name: /home/i });
  const linkAbout = screen.getByRole('link', { name: /about/i });
  const linkFavorite = screen.getByRole('link', { name: /favorite pokémon/i });

  expect(linkHome).toBeInTheDocument();
  expect(linkAbout).toBeInTheDocument();
  expect(linkFavorite).toBeInTheDocument();

  await userEvent.click(linkHome);
  const h2text = screen.getByText('Encountered Pokémon');
  expect(h2text).toBeInTheDocument();

  await userEvent.click(linkAbout);
  const titleAbout = screen.getByText('About Pokédex');
  expect(titleAbout).toBeInTheDocument();

  await userEvent.click(linkFavorite);
  const titleFavorite = screen.getByText('Favorite Pokémon');
  expect(titleFavorite).toBeInTheDocument();
});
