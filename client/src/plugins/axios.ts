import axios from 'axios';

const getTokenCookie = (): string => {
  return localStorage.getItem('token') || '';
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
