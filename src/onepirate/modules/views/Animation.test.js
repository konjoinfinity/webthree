import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Animation from './Animation';

it('should find Animation section', () => { 
  render(<Animation/>)
  waitFor(() => expect(screen.findByTestId("displaycard")).toBeInTheDocument());
})

it('should find Card', () => { 
  render(<Animation/>)
  waitFor(() => expect(screen.findByTestId("card")).toBeInTheDocument());
})

it('should find card container', () => { 
  render(<Animation/>)
  waitFor(() => expect(screen.findByTestId("cardcont")).toBeInTheDocument());
})

it('should find motion card', () => { 
  render(<Animation/>)
  waitFor(() => expect(screen.findByTestId("motioncard")).toBeInTheDocument());
})

it('should find motion card', () => { 
  render(<Animation/>)
  waitFor(() => expect(screen.findByAltText("baebee")).toBeInTheDocument());
})

it('should find motion card2', () => { 
  render(<Animation/>)
  waitFor(() => expect(screen.findByTestId("motioncard2")).toBeInTheDocument());
})

it('should find div', () => { 
  render(<Animation/>)
  waitFor(() => expect(screen.findByTestId("divider")).toBeInTheDocument());
})

it('should find text1', () => { 
  render(<Animation/>)
  waitFor(() => expect(screen.findByTestId("text1")).toBeInTheDocument());
})

it('should find text2', () => { 
  render(<Animation/>)
  waitFor(() => expect(screen.findByTestId("text2")).toBeInTheDocument());
})