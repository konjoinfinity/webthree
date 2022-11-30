import { render, screen, fireEvent } from '@testing-library/react';
import Specs from './Specs';

it('should find Specs section', () => { 
  render(<Specs/>)
  const section = screen.getByTestId("specs")
  expect(section).toBeInTheDocument();
})

it('should find Title', () => { 
  render(<Specs/>)
  const section = screen.getByText("NFT Specifications")
  expect(section).toBeInTheDocument();
})

it('should find main section', () => { 
  render(<Specs/>)
  const section = screen.getByTestId("section")
  expect(section).toBeInTheDocument();
})

it('should find container', () => { 
  render(<Specs/>)
  const section = screen.getByTestId("container")
  expect(section).toBeInTheDocument();
})

it('should find grid', () => { 
  render(<Specs/>)
  const section = screen.getByTestId("grid")
  expect(section).toBeInTheDocument();
})

it('should find grid1', () => { 
  render(<Specs/>)
  const section = screen.getByTestId("grid1")
  expect(section).toBeInTheDocument();
})

it('should find item', () => { 
  render(<Specs/>)
  const section = screen.getByTestId("item")
  expect(section).toBeInTheDocument();
})

it('should find img', () => { 
  render(<Specs/>)
  const section = screen.getByAltText("graph")
  expect(section).toBeInTheDocument();
})

it('should find text1', () => { 
  render(<Specs/>)
  const section = screen.getByText("How many NFTs?")
  expect(section).toBeInTheDocument();
})

it('should find text2', () => { 
  render(<Specs/>)
  const section = screen.getByText("We developed 4000 2D Beauty Baebees, 1000 Pixelated Beauty Baebees, And 6 3D Limited Edition Beauty Baebees.")
  expect(section).toBeInTheDocument();
})

it('should find grid2', () => { 
  render(<Specs/>)
  const section = screen.getByTestId("grid2")
  expect(section).toBeInTheDocument();
})

it('should find item2', () => { 
  render(<Specs/>)
  const section = screen.getByTestId("item2")
  expect(section).toBeInTheDocument();
})

it('should find img2', () => { 
  render(<Specs/>)
  const section = screen.getByAltText("polygon")
  expect(section).toBeInTheDocument();
})

it('should find text2', () => { 
  render(<Specs/>)
  const section = screen.getByText("Polygon ERC-721 NFT")
  expect(section).toBeInTheDocument();
})

it('should find text2', () => { 
  render(<Specs/>)
  const section = screen.getByText("The Baebees NFT Contract that governs ownership is a standard ERC-721 compatible with any service or exchange. Purchasing a Beauty Baebee NFT costs 50 MATIC - POLYGON.")
  expect(section).toBeInTheDocument();
})

it('should find grid3', () => { 
  render(<Specs/>)
  const section = screen.getByTestId("grid3")
  expect(section).toBeInTheDocument();
})

it('should find item3', () => { 
  render(<Specs/>)
  const section = screen.getByTestId("item3")
  expect(section).toBeInTheDocument();
})

//

it('should find img3', () => { 
  render(<Specs/>)
  const section = screen.getByAltText("exchangeable")
  expect(section).toBeInTheDocument();
})

it('should find text3', () => { 
  render(<Specs/>)
  const section = screen.getByText("NFT Utility")
  expect(section).toBeInTheDocument();
})

it('should find text4', () => { 
  render(<Specs/>)
  const section = screen.getByTestId("text4")
  expect(section).toBeInTheDocument();
})

it('should find text3', () => { 
  render(<Specs/>)
  const section = screen.getByText("ReautyDAO page")
  expect(section).toBeInTheDocument();
  expect(section).toHaveAttribute("href", "https://reautydao.io");
})