const API_URL = process?.env?.REACT_APP_API_URL;
const API_TOKEN = process?.env?.REACT_APP_API_TOKEN;

export async function fetchUsers(text) {
  try {
    const params = new URLSearchParams({
      q: text,
    });
    const response = await fetch(`https://${API_URL}/search/users?${params}`, {
      headers: {
        Authorization: `token ${API_TOKEN}`,
      },
    });
    const { items: users } = await response.json();
    return { users };
  } catch (err) {
    return { error: err.message };
  }
}
