import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);

  // eslint-disable-next-line no-console
  console.error('boom');

  const linkElement = screen.getByText(/learn react/i);

  expect(linkElement).toBeInTheDocument();
});
