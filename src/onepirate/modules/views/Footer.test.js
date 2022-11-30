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
    expect(container.firstChild).toHaveClass(`bg-light text-center text-white`)
  })

// it('should render the button with some text', () => {
//     // Arrange
//     const text = 'I am a button, I can be clicked'
  
//     // Act
//     const { getByText, container } = render(<Button>{text}</Button>)
  
//     // Assert
//     expect(container).toMatchSnapshot()
//     getByText(text)
// })