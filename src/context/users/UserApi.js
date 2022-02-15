import axios from 'axios';

const API_URL = process?.env?.REACT_APP_API_URL;

axios.defaults.baseURL = `https://${API_URL}`;

export async function fetchUsers(text) {
  try {
    const params = new URLSearchParams({
      q: text,
    });
    const { data } = await axios.get(`/search/users?${params}`);
    const { items: users } = data;
    return { users };
  } catch (err) {
    const { status, data } = err.response ?? {};
    return { error: data?.message ?? err.message, status };
  }
}

export async function getUser(username) {
  try {
    const { data } = await axios.get(`/users/${username}`);
    return { user: data };
  } catch (err) {
    const { status, data } = err.response ?? {};
    return { error: data?.message ?? err.message, status };
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
    const { status, data } = err.response ?? {};
    return { error: data?.message ?? err.message, status };
  }
}
