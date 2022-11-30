import { render, screen, fireEvent } from '@testing-library/react';
import ProductSmokingHero from './ProductSmokingHero'

it('should find smoke section', () => { 
  render(<ProductSmokingHero/>)
  const section = screen.getByTestId("smoke")
  expect(section).toBeInTheDocument();
})

it('should find questions link', () => { 
render(<ProductSmokingHero/>)
    const link = screen.getByTestId("qs")
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', 'https://reautydao.io/about/')
})

it('should find questions button', () => { 
  render(<ProductSmokingHero/>)
      const button = screen.getByRole("button")
      expect(button).toBeInTheDocument();
      expect(button).toHaveTextContent("Questions? Check out our FAQ.")
  })

  it('should find image', () => { 
    render(<ProductSmokingHero/>)
    const image = screen.getByAltText("bbimg")
    expect(image).toHaveStyle({width: "20%"})
})