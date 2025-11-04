import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Create Todo button', () => {
  render(<App />);
  const createButton = screen.getByRole('button', { name: /create todo/i });
  expect(createButton).toBeInTheDocument();
});
