import { render, screen, fireEvent } from '@testing-library/react';
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

it('should find container', () => { 
    render(<Footer/>)
    const container = screen.getByTestId("container")
    expect(container).toBeInTheDocument();
    expect(container).toHaveClass('p-4 pb-0')
})

it('should find section', () => { 
    render(<Footer/>)
    const section = screen.getByTestId("section")
    expect(section).toBeInTheDocument();
    expect(section).toHaveClass('mb-4')
})

it('should find fb button, check class, href', () => { 
    render(<Footer/>)
    const button = screen.getByRole("buttonfb")
    expect(button).toBeEnabled();
    expect(button).toHaveClass('m-1')
    expect(button).toHaveAttribute('href', 'https://reautydao.io/')
})


it('should find twitter button, check class, href', () => { 
    render(<Footer/>)
    const button = screen.getByRole("buttontw")
    expect(button).toBeEnabled();
    expect(button).toHaveClass('m-1')
    expect(button).toHaveAttribute('href', 'https://twitter.com/ReautyDao')
})

it('should find google button, check class, href', () => { 
    render(<Footer/>)
    const button = screen.getByRole("buttongo")
    expect(button).toBeEnabled();
    expect(button).toHaveClass('m-1')
    expect(button).toHaveAttribute('href', 'https://reautydao.io/')
})

it('should find ig button, check class, href', () => { 
    render(<Footer/>)
    const button = screen.getByRole("buttonig")
    expect(button).toBeEnabled();
    expect(button).toHaveClass('m-1')
    expect(button).toHaveAttribute('href', 'https://www.instagram.com/reautyapp/')
})

it('should find linkedin button, check class, href', () => { 
    render(<Footer/>)
    const button = screen.getByRole("buttonli")
    expect(button).toBeEnabled();
    expect(button).toHaveClass('m-1')
    expect(button).toHaveAttribute('href', 'https://www.linkedin.com/company/blingy/')
})

it('should find discord button, check class, href', () => { 
    render(<Footer/>)
    const button = screen.getByRole("buttondis")
    expect(button).toBeEnabled();
    expect(button).toHaveClass('m-1')
    expect(button).toHaveAttribute('href', 'https://reautydao.io/')
})

it('should find image', () => { 
    render(<Footer/>)
    const image = screen.getByAltText("Logo")
    expect(image).toHaveStyle({height: "10vh"})
})

it('find copyright container', () => { 
    render(<Footer/>)
    const copy = screen.getByRole("copycont")
    expect(copy).toHaveStyle({ display: "flex",
    flexDirection: "row",
    alignItems: "row",
    justifyContent: "center",})
})

it('should find copy symbol', () => { 
    render(<Footer/>)
    const section = screen.getByText("©")
    expect(section).toBeInTheDocument();
})

it('should find copy symbol', () => { 
    render(<Footer/>)
    const link = screen.getByText("ReautyDAO")
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', 'https://reautydao.io')
})

it('should find dynamic year', () => { 
    render(<Footer/>)
    const link = screen.getByText(new Date().getFullYear())
    expect(link).toBeInTheDocument();
    expect(link).toHaveStyle({fontSize: "2vh", color: "#000"})
})
