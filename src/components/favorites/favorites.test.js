import { render, screen } from '@testing-library/react';
import Favorites from './favorites';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Favorites/i);
  expect(linkElement).toBeInTheDocument();
});
