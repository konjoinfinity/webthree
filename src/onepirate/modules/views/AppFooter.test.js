import { render, screen } from '@testing-library/react';
import AppFooter from './AppFooter'

test('renders footer', () => {
  render(<AppFooter />);
  const gradient = screen.getByRole("footer");
  expect(gradient).toBeInTheDocument();
});

test("div renders", () => {
  render(<AppFooter />);
  const div = screen.getByRole("footerdiv")
  expect(div).toBeInTheDocument();
})
