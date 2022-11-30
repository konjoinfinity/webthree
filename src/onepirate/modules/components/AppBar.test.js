import { render, screen, fireEvent } from '@testing-library/react';
import AppBar from './AppBar'

it('should find CTA section', () => { 
  render(<AppBar/>)
  const section = screen.getByTestId("appbar")
  expect(section).toBeInTheDocument();
})