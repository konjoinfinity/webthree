import { render, screen, fireEvent } from '@testing-library/react';
import ProductHowItWorks from './ProductHowItWorks';

it('should find HIW section', () => { 
  render(<ProductHowItWorks/>)
  const section = screen.getByTestId("hiw")
  expect(section).toBeInTheDocument();
})

it('should find HIW section1', () => { 
  render(<ProductHowItWorks/>)
  const section = screen.getByTestId("hiw1")
  expect(section).toBeInTheDocument();
})

it('should find back img', () => { 
  render(<ProductHowItWorks/>)
  const section = screen.getByAltText("curvy lines")
  expect(section).toBeInTheDocument();
})

it('should find title', () => { 
  render(<ProductHowItWorks/>)
  const section = screen.getByText("How to mint")
  expect(section).toBeInTheDocument();
})

it('should find grid1', () => { 
  render(<ProductHowItWorks/>)
  const section = screen.getByTestId("grid1")
  expect(section).toBeInTheDocument();
})

it('should find grid2', () => { 
  render(<ProductHowItWorks/>)
  const section = screen.getByTestId("grid2")
  expect(section).toBeInTheDocument();
})

it('should find grid3', () => { 
  render(<ProductHowItWorks/>)
  const section = screen.getByTestId("grid3")
  expect(section).toBeInTheDocument();
})

it('should find grid4', () => { 
  render(<ProductHowItWorks/>)
  const section = screen.getByTestId("grid4")
  expect(section).toBeInTheDocument();
})

it('should find item', () => { 
  render(<ProductHowItWorks/>)
  const section = screen.getByTestId("item")
  expect(section).toBeInTheDocument();
})

it('should find item2', () => { 
  render(<ProductHowItWorks/>)
  const section = screen.getByTestId("item2")
  expect(section).toBeInTheDocument();
})

it('should find item3', () => { 
  render(<ProductHowItWorks/>)
  const section = screen.getByTestId("item3")
  expect(section).toBeInTheDocument();
})

it('should find number', () => { 
  render(<ProductHowItWorks/>)
  const section = screen.getByTestId("number")
  expect(section).toBeInTheDocument();
})

it('should find number2', () => { 
  render(<ProductHowItWorks/>)
  const section = screen.getByTestId("number2")
  expect(section).toBeInTheDocument();
})

it('should find number3', () => { 
  render(<ProductHowItWorks/>)
  const section = screen.getByTestId("number3")
  expect(section).toBeInTheDocument();
})

it('should find metamask img', () => { 
  render(<ProductHowItWorks/>)
  const section = screen.getByAltText('Polygon')
  expect(section).toBeInTheDocument();
})

it('should find metamask img', () => { 
  render(<ProductHowItWorks/>)
  const section = screen.getByAltText('NFT')
  expect(section).toBeInTheDocument();
})

it('should find metamask img', () => { 
  render(<ProductHowItWorks/>)
  const section = screen.getByAltText('Metamask')
  expect(section).toBeInTheDocument();
})

it('should find text1', () => { 
  render(<ProductHowItWorks/>)
  const section = screen.getByTestId("text1")
  expect(section).toBeInTheDocument();
})

it('should find text2', () => { 
  render(<ProductHowItWorks/>)
  const section = screen.getByTestId("text2")
  expect(section).toBeInTheDocument();
})

it('should find text3', () => { 
  render(<ProductHowItWorks/>)
  const section = screen.getByTestId("text3")
  expect(section).toBeInTheDocument();
})

it('should find link', () => { 
  render(<ProductHowItWorks/>)
  const section = screen.getByText("click here.")
  expect(section).toBeInTheDocument();
  expect(section).toHaveAttribute("href", "https://metamask.io/");
})

it('should find link2', () => { 
  render(<ProductHowItWorks/>)
  const section = screen.getByText("MATIC - POLYGON")
  expect(section).toBeInTheDocument();
  expect(section).toHaveAttribute("href", "https://www.coinbase.com/price/polygon");
})

it('should find button', () => { 
  render(<ProductHowItWorks/>)
  const section = screen.getByRole("button")
  expect(section).toBeInTheDocument();
  // fireEvent.click(screen.getByRole("button"));
  // expect(screen.queryByTestId("error-msg")).not.toBeInTheDocument();
})