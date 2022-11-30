import { render, screen } from '@testing-library/react';
import Footer from './Footer'

test('renders footer', () => {
  render(<Footer />);
  const cont = screen.getByRole("footcont");
  expect(cont).toBeInTheDocument();
});

it('footer class test', () => {
    const { container } = render(<Footer/>)
    // Assert
    expect(container).toMatchSnapshot()
    expect(container.firstChild).toHaveClass('bg-light text-center text-white')
  })

// it('should find all buttons', () => { 
//     render(<Footer/>)
//     const button = screen.getAllByRole("button")
//     expect(button).toBeInTheDocument();
// })