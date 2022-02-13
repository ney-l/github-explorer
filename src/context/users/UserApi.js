import axios from 'axios';

const API_URL = process?.env?.REACT_APP_API_URL;
const API_TOKEN = process?.env?.REACT_APP_API_TOKEN;

export async function fetchUsers(text) {
  try {
    const params = new URLSearchParams({
      q: text,
    });
    const { data } = await axios.get(
      `https://${API_URL}/search/users?${params}`,
      {
        headers: {
          Authorization: `token ${API_TOKEN}`,
        },
      }
    );
    const { items: users } = data;
    return { users };
  } catch (err) {
    const { status, data } = err.response ?? {};
    return { error: data?.message ?? err.message, status };
  }
}
