import axios from 'axios';

const getAllCookies = (): { [key: string]: string } => {
  const cookies: { [key: string]: string } = {};

  document.cookie.split(';').forEach((c) => {
    const [key, value] = c.split('=');
    cookies[key.trim()] = value;
  });

  return cookies;
};

const getTokenCookie = (): string => {
  const cookies = getAllCookies();

  return cookies.token;
};

const baseURL = process.env.BASE_API_URL || 'http://localhost:8080';

const baseAxios = axios.create({
  baseURL,
});

const authAxios = axios.create({
  baseURL: `${baseURL}/auth`,
});

const linksAxios = axios.create({
  baseURL: `${baseURL}/links`,
  headers: {
    Authorization: getTokenCookie(),
  },
});

export { baseAxios, authAxios, linksAxios };
