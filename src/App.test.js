import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the expected content', () => {
  render(<App />);
  const headerElement = screen.getByText(/NY Times Most Popular Articles/i);
  expect(headerElement).toBeInTheDocument();
});

