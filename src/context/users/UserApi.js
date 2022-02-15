import axios from 'axios';

const API_URL = process?.env?.REACT_APP_API_URL;

axios.defaults.baseURL = `https://${API_URL}`;

function getError(err) {
  const { status, data } = err.response ?? {};
  if (data?.message.includes('API rate limit exceeded')) {
    return {
      error:
        'GitHub API rate limit exceeded. Please wait and try again after a couple of minutes. Since this is a single page app that communicates with GitHub API directly without any intermediate backend server, there is no safe way to use a GitHub API Token securely. Hence the quick API rate limit exceeded error.',
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
    return { users };
  } catch (err) {
    return getError(err);
  }
}

export async function getUser(username) {
  try {
    const { data } = await axios.get(`/users/${username}`);
    return { user: data };
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
    return { repos: data };
  } catch (err) {
    return getError(err);
  }
}
