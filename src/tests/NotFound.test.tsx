import { render, screen } from '@testing-library/react';
import { NotFound } from '../pages';

test('Teste o componente not found', () => {
  render(<NotFound />);
  expect(screen.getByRole('heading', { name: 'Page requested not found' }));
});
test('teste a imagem no componente notFound', () => {
  render(<NotFound />);
  const image = screen.getByAltText("Clefairy pushing buttons randomly with text I have no idea what i'm doing");
  expect(image).toBeInTheDocument();
  expect(image).not.toHaveAttribute('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
});
