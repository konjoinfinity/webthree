import React from "react"
import { render, screen, fireEvent } from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect"
import Snackbar from "./Snackbar"

  it("should render as default snackbar", () => {
    const { container } = render(<Snackbar />)
    expect(container.firstChild).toMatchSnapshot()
  })
