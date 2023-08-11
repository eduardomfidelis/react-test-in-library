import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { About } from '../pages';

tes('Teste se a página contém as informações sobre a Pokédex.', () => {
  render(<About />, { wrapper: BrowserRouter });

  expect(screen.getByRole('h2', { name: /About Pokédex/i }));
  const parag = screen.getAllByRole('p');
  expect(parag).toHaveLength(2);

  const altText = 'Pokédex';
  const imageUrl = 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';
  const imageElement = screen.getByAltText(altText);

  expect(imageElement.getAttribute('src')).toBe(imageUrl);
});
