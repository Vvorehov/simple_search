import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

describe('App Component', () => {
  test('renders the app correctly', () => {
    render(<App />);
    const title = screen.getByText(/Disney Characters Search/i);
    expect(title).toBeInTheDocument();
  });
});