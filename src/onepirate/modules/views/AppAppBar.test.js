import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import AppAppBar from './AppAppBar';

it('should find appbar', () => { 
  render(<AppAppBar/>)
  screen.findByTestId("appbar").toBeInTheDocument();
})
