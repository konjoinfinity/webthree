import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TextField from './TextField'

it('should render textfield', () => { 
  render(<TextField placeholder="test"/>)
  const section = screen.getByPlaceholderText("test")
  expect(section).toBeInTheDocument();
})

it('should render textfield with options', () => { 
  render(<TextField noBorder
    placeholder="Your email"
    variant="standard"
    type="email"
    sx={{ width: '100%', mt: 3, mb: 2 }}/>)
  const section = screen.getByPlaceholderText("Your email")
  expect(section).toBeInTheDocument();
  expect(section).toHaveClass("MuiInput-input")
  expect(section).toHaveStyle({width: '100%'})
  expect(section).toHaveClass("css-1x51dt5-MuiInputBase-input-MuiInput-input")
})