import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Typography from './Typography'

it('should render typography', () => { 
  render(<Typography>test</Typography>)
  const section = screen.getByText("test")
  expect(section).toBeInTheDocument();
})

it('should render typography with h1', () => { 
  render(<Typography variant="h4" marked="center" align="center" component="h2">test</Typography>)
  const section = screen.getByText("test")
  expect(section).toBeInTheDocument();
  expect(section).toHaveClass("MuiTypography-h4")
  expect(section).toHaveClass("MuiTypography-alignCenter")
})