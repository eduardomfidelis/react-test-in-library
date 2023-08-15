import { render, screen } from '@testing-library/react';
import { About } from '../pages';

describe('Testa o componente about', () => {
  it('Deve possuir h2 com o texto "About Pokédex"', () => {
    render(<About />);
    const heading = screen.getByText(/About Pokédex/i);
    expect(heading).toBeInTheDocument();
  });

  test('Deve ter dois paragrafos sobre pokédex', () => {
    render(<About />);
    expect(screen.getByText(/This application simulates a Pokédex/i));
    expect(screen.getByText(/One can filter Pokémon by type/i));
  });

  test('testa a imagem da pokedex', () => {
    render(<About />);
    const image = screen.getByAltText('Pokédex');
    expect(image).toHaveAttribute(
      'src',
      'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png',
    );
  });
});
