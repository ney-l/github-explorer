import { renderHook, act } from '@testing-library/react-hooks';
import { useSearchUsers, initialState } from 'context/users';
import { server } from 'mocks/browser';
import { repos, user, users } from 'mocks/data';
import {
  getReposApiLimitError,
  getUserApiLimitError,
  searchApiLimitError,
} from 'mocks/handlers';
import { Formatters } from 'utils';
import { API_LIMIT_ERROR } from 'context/users/UserApi';

test('initial state', () => {
  const { result } = renderHook(useSearchUsers);

  expect(result.current.state).toEqual(initialState);
  expect(typeof result.current.searchUsers).toBe('function');
  expect(typeof result.current.clearUsers).toBe('function');
  expect(typeof result.current.getUser).toBe('function');
  expect(typeof result.current.getUserRepos).toBe('function');
});

describe('fetch users data', () => {
  const searchTerm = 'test';
  test('updates users data to state on api success response', async () => {
    const { result } = renderHook(useSearchUsers);

    expect(result.current.state.users.length).toBe(0);

    await act(async () => {
      await result.current.searchUsers(searchTerm);
    });

    expect(result.current.state.users).toEqual(users);
    expect(result.current.state.isLoading).toBe(false);
  });

  test('updates error state if api returns error', async () => {
    server.use(searchApiLimitError);
    const { result } = renderHook(useSearchUsers);

    expect(result.current.state.error).toBeNull();

    await act(async () => {
      await result.current.searchUsers(searchTerm);
    });

    expect(result.current.state.users).toEqual([]);
    expect(result.current.state.isLoading).toBe(false);
    expect(typeof result.current.state.error).toBe('string');
    expect(result.current.state.error).toBe(API_LIMIT_ERROR);
  });
});

test('clears user data', async () => {
  const searchTerm = 'test';
  const { result } = renderHook(useSearchUsers);

  await act(async () => {
    await result.current.searchUsers(searchTerm);
  });

  expect(result.current.state.users.length).toBe(2);

  act(() => result.current.clearUsers());

  expect(result.current.state.users.length).toBe(0);
});

describe('getUser', () => {
  const username = 'ney-l';
  test('gets user data if api returns success', async () => {
    const { result } = renderHook(useSearchUsers);
    expect(result.current.state.user).toEqual({});

    await act(async () => await result.current.getUser(username));

    expect(result.current.state.user).toEqual(Formatters.camelCaseKeys(user));
    expect(result.current.state.isLoading).toBe(false);
  });

  test('updates error state if api returns error', async () => {
    server.use(getUserApiLimitError);

    const { result } = renderHook(useSearchUsers);
    expect(result.current.state.user).toEqual({});
    await act(async () => await result.current.getUser(username));

    expect(result.current.state.isLoading).toBe(false);
    expect(result.current.state.error).toBe(API_LIMIT_ERROR);
  });
});

describe('get user repos', () => {
  test('updates repo state if api returns success', async () => {
    const username = 'ney-l';
    const { result } = renderHook(useSearchUsers);

    await act(async () => await result.current.getUserRepos(username));

    expect(result.current.state.repos).toEqual({
      [username]: Formatters.camelCaseArr(repos),
    });
    expect(result.current.state.isLoading).toBe(false);
    expect(result.current.state.error).toBe(null);
  });
  test('updates error state if api returns error', async () => {
    server.use(getReposApiLimitError);
    const username = 'ney-l';
    const { result } = renderHook(useSearchUsers);

    await act(async () => await result.current.getUserRepos(username));

    expect(result.current.state.isLoading).toBe(false);
    expect(typeof result.current.state.error).toBe('string');
    expect(result.current.state.error).toBe(API_LIMIT_ERROR);
  });
});
