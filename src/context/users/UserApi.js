import axios from 'axios';
import { Formatters } from 'utils';

const API_URL = process?.env?.REACT_APP_API_URL;

export const baseUrl = `https://${API_URL}`;
axios.defaults.baseURL = baseUrl;

export const API_LIMIT_ERROR =
  'GitHub API rate limit exceeded. Please wait and try again after a couple of minutes. Since this is a single page app that communicates with GitHub API directly without any intermediate backend server, there is no safe way to use a GitHub API Token securely. Hence the quick API rate limit exceeded error.';

function getError(err) {
  const { status, data } = err.response ?? {};
  if (data?.message.includes('API rate limit exceeded')) {
    return {
      error: API_LIMIT_ERROR,
      status,
    };
  }
  return { error: data?.message ?? err.message, status };
}

export async function fetchUsers(text) {
  try {
    const params = new URLSearchParams({
      q: text,
    });
    const { data } = await axios.get(`/search/users?${params}`);
    const { items: users } = data;

    return { users: Formatters.camelCaseArr(users) };
  } catch (err) {
    return getError(err);
  }
}

export async function getUser(username) {
  try {
    const { data } = await axios.get(`/users/${username}`);
    return { user: Formatters.camelCaseKeys(data) };
  } catch (err) {
    return getError(err);
  }
}

export async function getRepos(username) {
  try {
    const params = new URLSearchParams({
      sort: 'created',
      per_page: 10,
    });
    const { data } = await axios.get(`/users/${username}/repos?${params}`);
    return { repos: Formatters.camelCaseArr(data) };
  } catch (err) {
    return getError(err);
  }
}
