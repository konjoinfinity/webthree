import React from "react"
import { render, fireEvent } from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect"
import Button from "./Button"

  it("should render as default button", () => {
    const { container } = render(<Button />)
    expect(container.firstChild).toMatchSnapshot()
  })

it('should render a large button', () => {
  const { container } = render(<Button size="large"/>)
  expect(container).toMatchSnapshot()
  expect(container.firstChild).toBeInTheDocument();
  expect(container.firstChild).toHaveClass("MuiButton-sizeLarge")
})

it('should render a small button', () => {
  const { container } = render(<Button size="small"/>)
  expect(container).toMatchSnapshot()
  expect(container.firstChild).toBeInTheDocument();
  expect(container.firstChild).toHaveClass("MuiButton-sizeSmall")
})

it('should render a secondary button', () => {
  const variant = 'secondary'
  const { container } = render(<Button color={variant}></Button>)
  expect(container).toMatchSnapshot()
  expect(container.firstChild).toHaveClass("MuiButton-textSecondary")
})

it('should render the button with some text', () => {
  const text = 'Click me'
  const { getByText, container } = render(<Button>{text}</Button>)
  expect(container).toMatchSnapshot()
  getByText(text)
})

it('should call the click callback handler', () => {
  const content = 'Click Me!'
  const onClick = jest.fn()
  const { getByText } = render(<Button onClick={onClick}>{content}</Button>)
  fireEvent.click(getByText(content))
  expect(onClick).toHaveBeenCalledTimes(1)
})