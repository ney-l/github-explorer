import { render, screen } from '@testing-library/react';
import { Stat } from 'components/users';

test('Stat renders props', () => {
  const Icon = ({ children }) => <i>{children}</i>;
  const props = {
    title: 'my title',
    value: 'my value',
    Icon,
  };
  render(<Stat {...props} />);
  expect(screen.getByText(props.title).innerHTML).toBe(props.title);
  expect(screen.getByText(props.value).innerHTML).toBe(props.value);
});
