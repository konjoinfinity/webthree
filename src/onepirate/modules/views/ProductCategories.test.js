import { render, screen, fireEvent } from '@testing-library/react';
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

test('Should find recent mints text', () => {
  render(<ProductCategories/>)
  const element = screen.getByTestId("imagebox")
  expect(element).toBeInTheDocument();
});

test('Should find Beauty Baebee #1 text', () => {
  render(<ProductCategories/>)
  const bb1 = screen.getByText("Beauty Baebee #1")
  expect(bb1).toBeInTheDocument();
});

test('Should find Beauty Baebee #10 text', () => {
  render(<ProductCategories/>)
  const bb10 = screen.getByText("Beauty Baebee #10")
  expect(bb10).toBeInTheDocument();
});



