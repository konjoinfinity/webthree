import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ProductCategories from './ProductCategories'

it('should find Product Cat Section', () => { 
  render(<ProductCategories/>)
  const section = screen.getByTestId("section")
  expect(section).toBeInTheDocument();
})

test('Should find recent mints text', () => {
  render(<ProductCategories/>)
  const element = screen.getByText("Recent Mints")
  expect(element).toBeInTheDocument();
});