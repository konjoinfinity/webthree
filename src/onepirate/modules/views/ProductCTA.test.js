import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ProductCTA from './ProductCTA'

it('should find CTA section', () => { 
  render(<ProductCTA/>)
  const section = screen.getByTestId("cta")
  expect(section).toBeInTheDocument();
})

it('should find CTA container', () => { 
  render(<ProductCTA/>)
  const section = screen.getByRole("container")
  expect(section).toBeInTheDocument();
})

it('should find CTA grid', () => { 
  render(<ProductCTA/>)
  const section = screen.getByRole("grid")
  expect(section).toBeInTheDocument();
})

it('should find CTA box1', () => { 
  render(<ProductCTA/>)
  const section = screen.getByTestId("box1")
  expect(section).toBeInTheDocument();
})

it('should find form and test submit', () => { 
  render(<ProductCTA/>)
  const form = screen.getByTestId("form")
  expect(form).toBeInTheDocument();
  fireEvent.click(screen.getByRole("button"));
})

test('Should have email textarea', () => {
  render(<ProductCTA/>)
  const element = screen.getByPlaceholderText("Your email")
  expect(element).toBeInTheDocument();
  expect(element).toHaveAttribute("type", "email");
});

test('pass valid email to test email input field', () => {
  render(<ProductCTA />);
  const email = screen.getByPlaceholderText("Your email")
  userEvent.type(email, "test@mail.com");
  expect(screen.getByPlaceholderText("Your email")).toHaveValue("test@mail.com");
  fireEvent.click(screen.getByRole("button"));
  expect(screen.queryByTestId("error-msg")).not.toBeInTheDocument();
});

it('should find current trends text', () => { 
  render(<ProductCTA/>)
  const section = screen.getByText("Keep Up With Current Trends")
  expect(section).toBeInTheDocument();
})

it('should find join text', () => { 
  render(<ProductCTA/>)
  const section = screen.getByText("Join the ReautyDAO Community today, get our latest news, insights and info about our ReautyCoin, Beabee NFTs, ReautyDAO and more.")
  expect(section).toBeInTheDocument();
})


it('should find CTA grid2', () => { 
  render(<ProductCTA/>)
  const section = screen.getByTestId("grid2")
  expect(section).toBeInTheDocument();
})

it('should find CTA box2', () => { 
  render(<ProductCTA/>)
  const section = screen.getByTestId("box2")
  expect(section).toBeInTheDocument();
})

it('should find CTA image', () => { 
  render(<ProductCTA/>)
  const section = screen.getByRole("img")
  expect(section).toBeInTheDocument();
  expect(section).toHaveAttribute('src', "https://i.seadn.io/gae/bFI6oyaPNfB7qmUAx4eWaT0fHh_oc6TMKCx3XsAxP47rNU61zH6YBG7Qhz81Oiy7mMXswMzX-82D8C3t6c1Fbz25vVPYPKmrSPCjxA?auto=format&w=1000")
})