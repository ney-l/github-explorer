import { render, screen } from '@testing-library/react';
import { Spinner } from 'components/layout';

test('renders Spinner component', () => {
  render(<Spinner />);
  expect(screen.getByAltText(/loading/i)).toHaveAttribute('src', 'spinner.gif');
});
