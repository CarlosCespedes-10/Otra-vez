import { render, screen } from '@testing-library/react';
import App from './App';

it('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Favorites/i);
  expect(linkElement).toBeInTheDocument();
});
