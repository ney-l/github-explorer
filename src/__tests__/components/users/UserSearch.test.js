import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ERROR } from 'components/layout';
import { UserSearch } from 'components/users';

describe('Search form', () => {
  test('calls `setAlert` prop fn when blank form submitted', () => {
    const mockSetAlert = jest.fn();
    render(<UserSearch setAlert={mockSetAlert} />);

    const input = screen.getByRole('textbox');
    userEvent.type(input, '');

    const submitButton = screen.getByRole('button', { name: /go/i });
    userEvent.click(submitButton);

    expect(mockSetAlert).toHaveBeenCalledWith({
      message: 'Please enter something',
      type: ERROR,
    });
    expect(mockSetAlert).toHaveBeenCalledTimes(1);
  });

  test('calls searchUsers prop fn when valid form submitted', () => {
    const searchTerm = 'something';
    const mockSearchUsers = jest.fn();
    render(<UserSearch searchUsers={mockSearchUsers} />);
    userEvent.type(screen.getByRole('textbox'), searchTerm);
    userEvent.click(screen.getByRole('button', { name: /go/i }));
    expect(mockSearchUsers).toHaveBeenCalledTimes(1);
    expect(mockSearchUsers).toHaveBeenCalledWith(searchTerm);
  });
});

describe('Search field', () => {
  test('search field is empty by default', () => {
    render(<UserSearch />);
    expect(screen.getByRole('textbox')).toHaveValue('');
  });

  test('user can type in the input element', () => {
    const sampleText = 'something';
    render(<UserSearch />);
    const input = screen.getByRole('textbox');
    userEvent.type(input, sampleText);
    expect(input).toHaveValue(sampleText);
  });
});

describe('Clear Button', () => {
  const users = [{ id: 1 }, { id: 2 }];
  test('does not show if users is not provided', () => {
    render(<UserSearch />);

    expect(screen.queryByRole('button', { name: /clear/i })).toBeNull();
  });

  test('shows if users is passed', () => {
    render(<UserSearch users={users} />);

    expect(screen.queryByRole('button', { name: /clear/i })).toBeVisible();
  });

  test('on clicking, clears text', () => {
    const mockClearUsers = jest.fn();
    render(<UserSearch users={users} clearUsers={mockClearUsers} />);

    const input = screen.getByRole('textbox');

    userEvent.type(input, 'something');

    const clearButton = screen.getByRole('button', { name: /clear/i });
    userEvent.click(clearButton);

    expect(input).toHaveValue('');
  });
});
