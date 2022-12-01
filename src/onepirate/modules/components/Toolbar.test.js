import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Toolbar from './Toolbar'

it('should render toolbar and have class', () => { 
  render(<Toolbar>test</Toolbar>)
  const section = screen.getByText("test")
  expect(section).toBeInTheDocument();
  expect(section).toHaveClass("MuiToolbar-regular")
 
})

it('should render toolbar with style', () => { 
  render(<Toolbar sx={{ justifyContent: 'space-between', backgroundColor: "#FFAB9C" }}>test</Toolbar>)
  const section = screen.getByText("test")
  expect(section).toBeInTheDocument();
  expect(section).toHaveStyle({ justifyContent: 'space-between', backgroundColor: "#FFAB9C" })
})


