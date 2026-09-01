import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the hero heading and projects section', () => {
  render(<App />);
  expect(screen.getAllByText(/Nadia Shovkovy/i).length).toBeGreaterThan(0);
  expect(
    screen.getByRole('heading', { name: /^projects$/i })
  ).toBeInTheDocument();
});
