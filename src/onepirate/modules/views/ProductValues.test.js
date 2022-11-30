import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ProductValues from './ProductValues';

it('should find box1', () => { 
  render(<ProductValues/>)
  waitFor(() => expect(screen.findByTestId("box1")).toBeInTheDocument());
})

it('should find title', () => { 
  render(<ProductValues/>)
  waitFor(() => expect(screen.findByText("Beauty Baebee NFT Series")).toBeInTheDocument());
})

it('should find box2', () => { 
  render(<ProductValues/>)
  waitFor(() => expect(screen.findByTestId("box2")).toBeInTheDocument());
})

it('should find cont1', () => { 
  render(<ProductValues/>)
  waitFor(() => expect(screen.findByTestId("cont1")).toBeInTheDocument());
})

it('should find grid1', () => { 
  render(<ProductValues/>)
  waitFor(() => expect(screen.findByTestId("grid1")).toBeInTheDocument());
})

it('should find grid2', () => { 
  render(<ProductValues/>)
  waitFor(() => expect(screen.findByTestId("grid2")).toBeInTheDocument());
})

it('should find box3', () => { 
  render(<ProductValues/>)
  waitFor(() => expect(screen.findByTestId("box3")).toBeInTheDocument());
})

it('should find 1st image', () => { 
  render(<ProductValues/>)
  waitFor(() => expect(screen.findByAltText("suitcase")).toBeInTheDocument());
})

it('should find text', () => { 
  render(<ProductValues/>)
  waitFor(() => expect(screen.findByText("Beauty Reimagined")).toBeInTheDocument());
})

it('should find text', () => { 
  render(<ProductValues/>)
  waitFor(() => expect(screen.findByText('The "Toxic Baebee" NFT Series illustrated the "Toxic Side of Beauty". Reauty DAO is taking a stand against the misleading beauty culture, unhealthy practices, and harmful ingredients to reimagine the beauty industry with a decentralized Web3 community.')).toBeInTheDocument());
})

it('should find grid3', () => { 
  render(<ProductValues/>)
  waitFor(() => expect(screen.findByTestId("grid3")).toBeInTheDocument());
})

it('should find box4', () => { 
  render(<ProductValues/>)
  waitFor(() => expect(screen.findByTestId("box4")).toBeInTheDocument());
})

it('should find 2nd image', () => { 
  render(<ProductValues/>)
  waitFor(() => expect(screen.findByAltText("graph")).toBeInTheDocument());
})

it('should find text', () => { 
  render(<ProductValues/>)
  waitFor(() => expect(screen.findByText("Beauty Baebee NFTs")).toBeInTheDocument());
})

it('should find text', () => { 
  render(<ProductValues/>)
  waitFor(() => expect(screen.findByText("The Beauty Baebee series illustrates the Reauty DAO mission and invites beauty lovers, LGBTQ+ groups, BIPOC owners and SME beauty content creators to build a new order in the beauty industry.")).toBeInTheDocument());
})

it('should find grid4', () => { 
  render(<ProductValues/>)
  waitFor(() => expect(screen.findByTestId("grid3")).toBeInTheDocument());
})

it('should find box5', () => { 
  render(<ProductValues/>)
  waitFor(() => expect(screen.findByTestId("box4")).toBeInTheDocument());
})

it('should find 3rd image', () => { 
  render(<ProductValues/>)
  waitFor(() => expect(screen.findByAltText("clock")).toBeInTheDocument());
})

it('should find text', () => { 
  render(<ProductValues/>)
  waitFor(() => expect(screen.findByText("Unique NFTs")).toBeInTheDocument());
})

it('should find text', () => { 
  render(<ProductValues/>)
  waitFor(() => expect(screen.findByText("Each unique Baebee is designed by our creative team and generated from a pool of more than 170 possible traits. These include but are not limited to expression, headwear, and clothing.")).toBeInTheDocument());
})